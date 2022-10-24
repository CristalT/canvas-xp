import { initBoard } from '../../src/board';
import { beforeAll, describe, expect, it } from 'vitest';

describe('Board', () => {
    beforeAll(() => {
        const appWrapper = document.createElement('div');
        appWrapper.setAttribute('id', 'app');
        document.body.appendChild(appWrapper);
    });

    it('creates the main and overlay canvas', () => {
        initBoard();
        const boardCanvas = document.body.querySelectorAll('canvas');

        expect(boardCanvas.length).toBe(2);
        expect(boardCanvas[0].parentElement?.getAttribute('id')).toBe('app');
        expect(boardCanvas[1].parentElement?.getAttribute('id')).toBe('app');
    });

    it('draws with mouse movement', () => {})
});
