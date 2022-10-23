import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Canvas } from '../../src/board';

describe('Canvas', () => {
    let selector: HTMLDivElement;
    beforeEach(() => {
        selector = document.createElement('div');
    });
    afterEach(() => {
        selector.remove()
    });

    it('creates a canvas with default values', () => {
        new Canvas(selector);
        expect(selector!.innerHTML).toEqual('<canvas width="1024" height="768"></canvas>');
    });

    it('sets background color', () => {
        const canvas = new Canvas(selector);
        canvas.ctx.fillRect = vi.fn();
        canvas.setBackground('red');
        expect(canvas.ctx.fillStyle).toEqual('#ff0000');
        expect(canvas.ctx.fillRect).toBeCalledWith(0, 0, 1024, 768);
    });

    it('returns canvas element', () => {
        const canvas = new Canvas(selector);
        expect(canvas.el instanceof HTMLCanvasElement).toBeTruthy();
    });

    it('returns canvas context', () => {
        const canvas = new Canvas(selector);
        expect(canvas.ctx.canvas instanceof HTMLCanvasElement).toBeTruthy();
    });
});
