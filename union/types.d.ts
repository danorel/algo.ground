export interface UnionFindInterface {
    connected: (a: number, b: number) => boolean;
    union: (a: number, b: number) => void;
}

export interface UnionFindCanonicalInterface {
    find: (i: number) => number;
}

export interface QuickUnionInterface extends UnionFindInterface {
    parent: (i: number) => number;
}