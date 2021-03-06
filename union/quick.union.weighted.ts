import { QuickUnionInterface, UnionFindCanonicalInterface } from "./types";

export interface QuickUnionWeightedInterface extends QuickUnionInterface, UnionFindCanonicalInterface {}

/**
 * Quick union-weighted data structure.
 *    Space: O(N)
 *
 * Method description:
 *  - parent:
 *      Time complexity: O(log(N))
 *      Space complexity: O(1)
 *  - connected:
 *      Time complexity: 2*O(parent) = 2*O(log(N)) = O(log(N))
 *      Space complexity: O(1)
 *  - union:
 *      Time complexity: 2*O(connected) = 2*O(log(N)) = O(log(N))
 *      Space complexity: O(1)
 *  - find:
 *      Time complexity: O(parent) + O(N) = O(log(N)) + O(N) = O(N)
 *      Space complexity: O(1)
 *
 *  For N objects to unite algorithm in takes:
 *     Worst: O(N*Log(N))
 *     Average: O(N*Log(N))
 */
export class QuickUnionWeighted implements QuickUnionWeightedInterface {
    private _data: number[];
    private _counter: number[];

    constructor(n: number) {
        this._data = [...Array(n)].map((_, i) => i);
        this._counter = [...Array(n)].fill(1);
    }

    private valid(i: number): boolean {
        return i >= 0 && i < this._data.length;
    }

    parent(i: number): number {
        if (!this.valid(i)) return -1;
        while (i !== this._data[i]) i = this._data[this._data[i]!]!; // Path compression: point to grandparent.
        return i;
    }

    connected(a: number, b: number): boolean {
        if (!this.valid(a) && !this.valid(b)) return false;
        return this.parent(a) === this.parent(b);
    }

    union(a: number, b: number): void {
        if (!this.valid(a) && !this.valid(b)) return;
        const ra = this.parent(a);
        const rb = this.parent(b);
        if (ra === rb) return;
        if (this._counter[ra]! <= this._counter[rb]!) {
            this._data[ra] = this._data[rb]!;
            this._counter[rb] += this._counter[ra]!;
        } else {
            this._data[rb] = this.data[ra]!;
            this._counter[ra] += this._counter[rb]!;
        }
    }

    find(i: number): number {
        if (!this.valid(i)) return -1;
        const ri = this.parent(i);
        for (let i = this._data.length - 1; i >= 0; --i) {
            if (this._data[i] === ri)
                return i;
        }
        return -1;
    }

    set data(data: number[]) {
        this._data = data;
    }

    get data() {
        return this._data;
    }
}