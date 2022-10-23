import { Canvas } from '../canvas';
import { Shape, ShapeSettings } from './shape';

export class Rect extends Shape {
    protected declare x: number;
    protected declare y: number;
    protected declare width: number;
    protected declare height: number;

    constructor(settings?: ShapeSettings) {
        super(settings);
    }

    draw(canvas: Canvas) {
        // rect
        canvas.ctx.fillStyle = this.settings.backgroundColor;
        canvas.ctx.fillRect(this.x, this.y, this.width, this.height);

        // border
        if (this.settings.borderWidth) {
            canvas.ctx.strokeStyle = this.settings.borderColor;
            canvas.ctx.lineWidth = this.settings.borderWidth;
            canvas.ctx.strokeRect(this.x, this.y, this.width, this.height);
        }

        return this;
    }

    clear(canvas: Canvas) {
        canvas.ctx.clearRect(0, 0, canvas.el.width, canvas.el.height);
    }
}
