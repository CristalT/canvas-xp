import { beforeAll, describe, expect, it } from 'vitest';
import { Canvas } from 'board';

describe('Canvas', () => {
    let selector: HTMLDivElement;
    beforeAll(() => {
        selector = document.createElement('div');
    });

    it('initializes with default values', () => {
        const canvas = new Canvas(selector);
        expect(canvas.width).toBe(1024);
        expect(canvas.height).toBe(768);
        expect(selector.innerHTML).toContain('canvas');
    });
});
