import { describe, expect, test, it, vi, beforeAll, afterAll } from 'vitest';
import { Canvas, Rect } from '../../../src/board';

describe('Rect', () => {
    it('initializes with default values', () => {
        const rect = new Rect();
        expect(rect.getPosition()).toEqual({
            x: 0,
            y: 0,
        });
        expect(rect.getDimension()).toEqual({
            width: 0,
            height: 0,
        });
    });

    describe('Start and End points', () => {
        const rect = new Rect();
        test('setFrom method: sets the starting point of the figure', () => {
            rect.setFrom(10, 20);
            expect(rect.getPosition()).toEqual({ x: 10, y: 20 });
        });

        test('setTo method: sets the end point of the figure defining its dimensions', () => {
            rect.setTo(30, 40);
            expect(rect.getDimension()).toEqual({ width: 20, height: 20 });
        });
    });

    describe('Draw method', () => {
        let selector: HTMLDivElement;
        let canvas: Canvas;
        beforeAll(() => {
            selector = document.createElement('div');
            canvas = new Canvas(selector);
            canvas.ctx.fillRect = vi.fn();
            canvas.ctx.strokeRect = vi.fn();
            canvas.ctx.clearRect = vi.fn();
        });

        afterAll(() => {
            selector.remove();
        });

        it('draws a rectangle with default settings', () => {
            const rect = new Rect();

            rect.setFrom(10, 10);
            rect.setTo(20, 20);
            rect.draw(canvas);
            expect(canvas.ctx.fillStyle).toEqual('rgba(255, 255, 255, 0.00)');
            expect(canvas.ctx.fillRect).toBeCalledWith(10, 10, 10, 10);
            expect(canvas.ctx.strokeStyle).toEqual('#000000');
            expect(canvas.ctx.lineWidth).toEqual(1);
            expect(canvas.ctx.strokeRect).toBeCalledWith(10, 10, 10, 10);
        });

        it('draws a rectangle with default settings', () => {
            const rect = new Rect({
                backgroundColor: '#cccccc',
                borderColor: '#ffffff',
                borderWidth: 2,
            });

            rect.setFrom(10, 10);
            rect.setTo(20, 20);
            rect.draw(canvas);
            expect(canvas.ctx.fillStyle).toEqual('#cccccc');
            expect(canvas.ctx.fillRect).toBeCalledWith(10, 10, 10, 10);
            expect(canvas.ctx.strokeStyle).toEqual('#ffffff');
            expect(canvas.ctx.lineWidth).toEqual(2);
            expect(canvas.ctx.strokeRect).toBeCalledWith(10, 10, 10, 10);
        });

        it('clears rectangle', () => {
            const rect = new Rect();
            rect.clear(canvas);
            expect(canvas.ctx.clearRect).toBeCalledWith(0, 0, canvas.el.width, canvas.el.height);
        })
    });
});
