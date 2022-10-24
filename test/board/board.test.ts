import { initBoard } from '../../src/board';
import { beforeAll, describe, expect, it } from 'vitest';

describe('Board', () => {
    beforeAll(() => {
        const appWrapper = document.createElement('div');
        appWrapper.setAttribute('id', 'app');
        document.body.appendChild(appWrapper);
    });

    it('creates the main and overlay canvas', () => {
        initBoard(document.body.querySelector('#app')!);
        const boardCanvas = document.body.querySelectorAll('canvas');

        expect(boardCanvas.length).toBe(2);
        expect(boardCanvas[0].parentElement?.getAttribute('id')).toBe('app');
        expect(boardCanvas[1].parentElement?.getAttribute('id')).toBe('app');
    });

    it('creates main and overlay canvas with custom values', () => {
        const selector: HTMLDivElement = document.body.querySelector('#app')!;
        const width = 1000;
        const height = 1500;
        const board = initBoard(selector, width, height);

        expect(board.getCanvas().el.width).toBe(1000);
        expect(board.getCanvas().el.height).toBe(1500);
        expect(board.getOverlay().el.width).toBe(1000);
        expect(board.getOverlay().el.height).toBe(1500);
    });

    it('draws with mouse movement', () => {});
});
