import { Canvas } from '../canvas';

export type ShapeSettings = {
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
};

interface ShapeInterface {
    setFrom(x: number, y: number): void;

    setTo(x: number, y: number): void;

    getPosition(): { x: number; y: number };

    getDimension(): { width: number; height: number };
}

export abstract class Shape implements ShapeInterface {
    protected x: number = 0;
    protected y: number = 0;
    protected width: number = 0;
    protected height: number = 0;
    protected settings: ShapeSettings = {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'black',
    };
    protected constructor(protected defaultSettings?: ShapeSettings) {
        if (defaultSettings) {
            Object.assign(this.settings, defaultSettings);
        }
    }

    setFrom(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    setTo(x: number, y: number) {
        this.width = x - this.x;
        this.height = y - this.y;
    }

    getPosition() {
        return {
            x: this.x,
            y: this.y,
        };
    }

    getDimension() {
        return {
            width: this.width,
            height: this.height,
        };
    }

    abstract draw(canvas: Canvas): Shape;

    abstract clear(canvas: Canvas): void;
}
