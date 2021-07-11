import { QuickUnionInterface } from "./types";

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