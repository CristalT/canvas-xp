import { Canvas } from './canvas';
import { Shape, ShapeSettings } from './shapes/shape';

enum MouseState {
    Up = 0,
    Down = 1,
}

type AppContext = { canvas: Canvas; overlay: Canvas };

interface DrawableElement {
    new (name?: ShapeSettings): Shape;
}

class Board {
    private ctx: AppContext;
    private stack: Shape[] = [];

    constructor(
        private selector: HTMLDivElement,
        private width: number,
        private height: number,
        private background: string
    ) {}

    init(): AppContext {
        const canvas = new Canvas(this.selector, this.width, this.height);
        const overlay = new Canvas(this.selector, this.width, this.height);

        this.ctx = { canvas, overlay };

        canvas.setBackground(this.background);

        return this.ctx;
    }

    getCanvas() {
        return this.ctx.canvas;
    }

    getOverlay() {
        return this.ctx.overlay;
    }

    draw(drawable: DrawableElement, settings?: ShapeSettings) {
        let mouse: MouseState;
        let shape: Shape;
        this.ctx.overlay.el.addEventListener('mousedown', (e) => {
            shape = new drawable(settings);
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
        });
    }
}

export function initBoard(
    selector: HTMLDivElement,
    width: number = 1024,
    height: number = 768,
    background = '#f4f5f7'
) {
    const board = new Board(selector, width, height, background);
    board.init();
    return board;
}
