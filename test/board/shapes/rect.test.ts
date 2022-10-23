import { describe, expect, test, it } from 'vitest';
import { Rect } from 'board';

describe('Rect', () => {
    it('initializes with default values', () => {
        const rect = new Rect();
        expect(rect.x).toBe(0);
        expect(rect.y).toBe(0);
        expect(rect.width).toBe(0);
        expect(rect.height).toBe(0);
    });

    describe('Start and End points', () => {
        const rect = new Rect();
        test('setFrom method: sets the starting point of the figure', () => {
            rect.setFrom(10, 20);
            expect(rect.x).toBe(10);
            expect(rect.y).toBe(20);
        });

        test('setTo method: sets the end point of the figure defining its dimensions', () => {
            rect.setTo(30, 40);
            expect(rect.width).toBe(20);
            expect(rect.height).toBe(20);
        });
    });
});
