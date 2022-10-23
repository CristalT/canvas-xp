import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Canvas } from 'board';

describe('Canvas', () => {
    let selector: HTMLDivElement | null;
    beforeEach(() => {
        selector = document.createElement('div');
    });
    afterEach(() => {
        selector = null;
    })

    it('initializes with default values', () => {
        const canvas = new Canvas(selector);
        expect(canvas.width).toBe(1024);
        expect(canvas.height).toBe(768);
        expect(selector!.innerHTML).toEqual('<canvas width="1024" height="768"></canvas>');
    });

    it('sets background color', () => {
        const canvas = new Canvas(selector)
        canvas.context.fillRect = vi.fn()
        canvas.setBackground('red');
        expect(canvas.ctx.fillStyle).toEqual('#ff0000')
        expect(canvas.context.fillRect).toBeCalledWith(0, 0, 1024, 768)
    })
});
