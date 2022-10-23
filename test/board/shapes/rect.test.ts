import { describe, expect, test, it } from 'vitest';
import { Rect } from '../../../src/board';

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
});
