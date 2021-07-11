import { QuickUnionInterface } from "./types";

export class QuickUnionWeighted implements QuickUnionInterface {
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

    set data(data: number[]) {
        this._data = data;
    }

    get data() {
        return this._data;
    }
}