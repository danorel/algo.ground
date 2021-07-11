import { UnionFindInterface } from "./types";

export class QuickUnionFind implements UnionFindInterface {
    private _data: number[];

    constructor(n: number) {
        this._data = [...Array(n)].map((_, i) => i);
    }

    private valid(i: number) {
        return i >= 0 && i < this._data.length;
    }

    public connected = (a: number, b: number) => {
        if (!this.valid(a) && !this.valid(b)) return false;
        return this._data[a] === this._data[b];
    }

    public union = (a: number, b: number) => {
        if (!this.valid(a) && !this.valid(b)) return;
        const aId = this._data[a]!;
        const bId = this._data[b]!;
        for (let i = 0; i < this._data.length; ++i) {
            if (this._data[i] === bId)
                this._data[i] = aId;
        }
    }

    set data(data: number[]) {
        this._data = data;
    }

    get data() {
        return this._data;
    }
}