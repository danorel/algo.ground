import { QuickUnionInterface } from "./types";

/**
 * Quick union class data structure.
 *    Space: O(N)
 *
 * Method description:
 *  - connected:
 *      Time complexity: O(N)
 *      Space complexity: O(1)
 *  - union:
 *      Time complexity: 2*O(connected) = 2*O(N) = O(N)
 *      Space complexity: O(1)
 *
 *  For N objects to unite algorithm in takes:
 *     Worst: O(n**2)
 *     Average: O(N*Log(n))
 */
export class QuickUnion implements QuickUnionInterface {
    private _data: number[];

    constructor(n: number) {
        this._data = [...Array(n)].map((_, i) => i);
    }

    private valid(i: number) {
        return i >= 0 && i < this._data.length;
    }

    parent(i: number): number {
        if (!this.valid(i)) return -1;
        if (this._data[i] === i) return i;
        else return this.parent(this._data[i]!);
    }

    connected(a: number, b: number): boolean {
        if (!this.valid(a) && !this.valid(b)) return false;
        return this.parent(a) === this.parent(b);
    }

    union(a: number, b: number): void {
        if (!this.valid(a) && !this.valid(b)) return;
        const ra = this.parent(a);
        const rb = this.parent(b);
        this._data[ra] = this._data[rb]!;
    }

    set data(data: number[]) {
        this._data = data;
    }

    get data() {
        return this._data;
    }
}