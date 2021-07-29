export default class Size {
    width: number;
    height: number;
    constructor(params: Partial<{
        width: number;
        height: number;
        size: Size;
    }>);
    static get zero(): Size;
    static isEqual(sizeA: Size, sizeB: Size): boolean;
    isEqual(size: Size): boolean;
    get isZero(): boolean;
}
