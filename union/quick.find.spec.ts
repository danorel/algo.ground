import { QuickUnionFind } from "./quick.find";

describe('QuickUnionFind', () => {
    describe('connected', () => {
        const quf = new QuickUnionFind(5);
        quf.data = [0, 1, 2, 1, 1];

        test('returns boolean of connectivity state between nodes', () => {
            expect(quf.connected(0, 3)).toBeFalsy();
            expect(quf.connected(1, 2)).toBeFalsy();
            expect(quf.connected(1, 4)).toBeTruthy();
            expect(quf.connected(3, 4)).toBeTruthy();
        });
    });

    describe('union', () => {
        const quf = new QuickUnionFind(5);
        const data = quf.data;

        test('returns void and setups connectivity between nodes', () => {
            quf.union(0, 3);
            quf.union(1, 2);
            quf.union(1, 4);
            quf.union(3, 4);

            expect(data[0]).toEqual(data[3]);
            expect(data[1]).toEqual(data[2]);
            expect(data[1]).toEqual(data[4]);
            expect(data[3]).toEqual(data[4]);
        });
    });
});