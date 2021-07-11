import { UnionFindInterface } from "./types";

export interface QuickUnionInterface extends UnionFindInterface {
    parent: (i: number) => number;
}

export class QuickUnion implements QuickUnionInterface {
    private _data: number[];

    constructor(n: number) {
        this._data = [...Array(n)].map((_, i) => i);
    }

    parent(i: number): number {
        if (i < 0 || i >= this._data.length) return -1;
        if (this._data[i] === i) return i;
        else return this.parent(this._data[i]!);
    }

    connected(a: number, b: number): boolean {
        return this.parent(a) === this.parent(b);
    }

    union(a: number, b: number): void {
        if ((a < 0 || a >= this._data.length) ||
            (b < 0 || b >= this._data.length))
            return;
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