import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Canvas } from '../../src/board';

describe('Canvas', () => {
    let selector: HTMLDivElement;
    let canvas: Canvas
    beforeEach(() => {
        selector = document.createElement('div');
        canvas = new Canvas(selector, 100, 200);
    });
    afterEach(() => {
        selector.remove()
    });

    it('creates a canvas with default values', () => {
        const sel = document.createElement('div');
        new Canvas(sel);
        expect(sel.innerHTML).toBe('<canvas width="1024" height="768"></canvas>');
    });

    it('creates a canvas with custom values', () => {
        expect(selector!.innerHTML).toEqual('<canvas width="100" height="200"></canvas>');
    });

    it('sets background color', () => {
        canvas.ctx.fillRect = vi.fn();
        canvas.setBackground('red');
        expect(canvas.ctx.fillStyle).toEqual('#ff0000');
        expect(canvas.ctx.fillRect).toBeCalledWith(0, 0, 100, 200);
    });

    it('returns canvas element', () => {
        expect(canvas.el instanceof HTMLCanvasElement).toBeTruthy();
    });

    it('returns canvas context', () => {
        const canvas = new Canvas(selector);
        expect(canvas.ctx.canvas instanceof HTMLCanvasElement).toBeTruthy();
    });
});
