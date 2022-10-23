import { Canvas } from '../canvas';

export type ShapeSettings = {
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
};

interface ShapeInterface {
    setFrom(x: number, y: number): void;

    setTo(x: number, y: number): void;
}

export abstract class Shape implements ShapeInterface {
    protected x: number = 0;
    protected y: number = 0;
    protected width: number = 0;
    protected height: number = 0;

    protected constructor(protected settings: ShapeSettings) {}

    setFrom(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    setTo(x: number, y: number) {
        this.width = x - this.x;
        this.height = y - this.y;
    }

    abstract draw(canvas: Canvas): Shape;

    abstract clear(canvas: Canvas): void;
}
