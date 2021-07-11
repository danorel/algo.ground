import { QuickUnionWeighted } from "../../quick.union.weighted";

export type Log = {
    timestamp: number;
    pair: [number, number];
}

export interface NetworkProblemInterface {
    find: (logs: Log[]) => number;
}

export class NetworkProblem implements NetworkProblemInterface {
    private quw: QuickUnionWeighted;

    constructor(n: number) {
        this.quw = new QuickUnionWeighted(n);
    }

    public full = (): boolean => {
        return this.quw.data.length
            ? this.quw.data.every((link: number) => link === this.quw.data[0])
            : true;
    }

    public find = (logs: Log[]): number => {
        for (const { pair, timestamp } of logs) {
            this.quw.union(pair[0], pair[1]);
            if (this.full()) return timestamp;
        }
        return -1;
    }
}