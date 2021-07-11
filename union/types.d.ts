export interface UnionFindInterface {
    connected: (a: number, b: number) => boolean;
    union: (a: number, b: number) => void;
}