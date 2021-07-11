import { QuickUnionWeighted } from "./quick.union.weighted";

describe('QuickUnionWeighted', function () {
    describe('connected', function () {
        const quw = new QuickUnionWeighted(10);
        quw.data = [0, 1, 1, 8, 3, 0, 5, 1, 8, 8];

        test('returns boolean of connectivity state between nodes', () => {
            expect(quw.connected(0, 1)).toBeFalsy();
            expect(quw.connected(1, 2)).toBeTruthy();
            expect(quw.connected(4, 9)).toBeTruthy();
            expect(quw.connected(2, 7)).toBeTruthy();
            expect(quw.connected(1, 7)).toBeTruthy();
            expect(quw.connected(1, 2)).toBeTruthy();
        });
    });

    describe('union', function () {
        const quw = new QuickUnionWeighted(10);
        quw.data = [0, 1, 1, 8, 3, 0, 5, 1, 8, 8];

        test('returns void and setups connectivity between nodes', () => {
            expect(quw.connected(0, 1)).toBeFalsy();
            quw.union(0, 1);
            expect(quw.connected(0, 1)).toBeTruthy();
            expect(quw.connected(8, 0)).toBeFalsy();
            quw.union(8, 0);
            expect(quw.connected(8, 0)).toBeTruthy();
        });
    });

    describe('find', () => {
        test('returns maximum node from largest component', () => {
            const quw = new QuickUnionWeighted(10);
            quw.data = [0, 5, 5, 3, 4, 5, 4, 4, 3, 5];
            expect(quw.find(1)).toEqual(9);
            expect(quw.find(9)).toEqual(9);
            expect(quw.find(2)).toEqual(9);
            expect(quw.find(5)).toEqual(9);
        });

        test('returns maximum node from regular component', () => {
            const quw = new QuickUnionWeighted(10);
            quw.data = [0, 5, 5, 3, 4, 5, 4, 4, 3, 5];
            expect(quw.find(4)).toEqual(7);
            expect(quw.find(6)).toEqual(7);
            expect(quw.find(7)).toEqual(7);
        });

        test('returns maximum node from zero component', () => {
            const quw = new QuickUnionWeighted(10);
            quw.data = [0, 5, 5, 3, 4, 5, 4, 4, 3, 5];
            expect(quw.find(0)).toEqual(0);
        });

        test('returns maximum node from complex massive component', () => {
            const quw = new QuickUnionWeighted(10);
            quw.data = [0, 5, 5, 3, 5, 5, 5, 5, 3, 5];
            expect(quw.find(1)).toEqual(9);
            expect(quw.find(4)).toEqual(9);
            expect(quw.find(6)).toEqual(9);
            expect(quw.find(7)).toEqual(9);
            expect(quw.find(9)).toEqual(9);
        });
    });
});