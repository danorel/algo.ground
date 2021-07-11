import { QuickUnionWeighted } from "./quick.union.weighted";

describe('QuickUnionWeighted', function () {
    describe('connected', function () {
        const qu = new QuickUnionWeighted(10);
        qu.data = [0, 1, 1, 8, 3, 0, 5, 1, 8, 8];

        test('returns boolean of connectivity state between nodes', () => {
            expect(qu.connected(0, 1)).toBeFalsy();
            expect(qu.connected(1, 2)).toBeTruthy();
            expect(qu.connected(4, 9)).toBeTruthy();
            expect(qu.connected(2, 7)).toBeTruthy();
            expect(qu.connected(1, 7)).toBeTruthy();
            expect(qu.connected(1, 2)).toBeTruthy();
        });
    });

    describe('union', function () {
        const qu = new QuickUnionWeighted(10);
        qu.data = [0, 1, 1, 8, 3, 0, 5, 1, 8, 8];

        test('returns void and setups connectivity between nodes', () => {
            expect(qu.connected(0, 1)).toBeFalsy();
            qu.union(0, 1);
            expect(qu.connected(0, 1)).toBeTruthy();
            expect(qu.connected(8, 0)).toBeFalsy();
            qu.union(8, 0);
            expect(qu.connected(8, 0)).toBeTruthy();
        });
    });
});