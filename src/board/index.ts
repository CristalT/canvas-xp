import { Canvas } from './canvas';
import { Shape, ShapeSettings } from './shapes/shape';

enum MouseState {
    Up = 0,
    Down = 1,
}

type AppContext = { canvas: Canvas; overlay: Canvas };

interface Drawable {
    new (name: ShapeSettings): Shape
}

class Board {
    private ctx: AppContext;
    private stack: Shape[] = []

    init(): AppContext {
        const canvas = new Canvas(document.body.querySelector('#app')!);
        canvas.setBackground('#ccc');
        const overlay = new Canvas(document.body.querySelector('#app')!);

        this.ctx = { canvas, overlay };
        return this.ctx;
    }

    draw(drawable: Drawable, settings: ShapeSettings) {
        let mouse: MouseState;
        let shape: Shape;
        this.ctx.overlay.el.addEventListener('mousedown', (e) => {
            shape = new drawable(settings)
            e.preventDefault();
            e.stopPropagation();
            mouse = MouseState.Down;
            const { offsetX: x, offsetY: y } = e;
            shape.setFrom(x, y);
        });

        this.ctx.overlay.el.addEventListener('mousemove', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (mouse !== MouseState.Down) return;
            const { offsetX: x, offsetY: y } = e;
            shape.setTo(x, y);
            shape.clear(this.ctx.overlay);
            shape.draw(this.ctx.overlay);
        });

        this.ctx.overlay.el.addEventListener('mouseup', (e) => {
            e.preventDefault();
            e.stopPropagation();
            mouse = MouseState.Up;
            this.stack.push(shape.draw(this.ctx.canvas));
            console.log(this.stack)
        });
    }
}

export function initBoard() {
    const engine = new Board();
    engine.init();
    return engine;
}

export { Canvas } from './canvas';
export { Rect } from './shapes';
