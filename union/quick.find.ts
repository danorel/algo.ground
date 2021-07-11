import { UnionFindInterface } from "./types";

export class QuickUnionFind implements UnionFindInterface {
    private _data: number[];

    constructor(n: number) {
        this._data = [...Array(n)].map((_, i) => i);
    }

    public connected = (a: number, b: number) => {
        return this._data[a] === this._data[b];
    }

    public union = (a: number, b: number) => {
        if ((a < 0 || a >= this._data.length) ||
            (b < 0 || b >= this._data.length)) return;
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