import Size from "@core-graphic/Size";
import Point from "@core-graphic/Point";
export default class Frame {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor(params: Partial<{
        x: number;
        y: number;
        width: number;
        height: number;
        point: Point;
        size: Size;
    }>);
    static get zero(): Frame;
    get centerX(): number;
    get centerY(): number;
    get maxX(): number;
    get maxY(): number;
    get origin(): Point;
    set origin(value: Point);
    get size(): Size;
    set size(value: Size);
    get isZero(): boolean;
    static cloneDeep(frame: Frame): Frame;
    cloneDeep(): Frame;
    isEqual(frame: Frame): boolean;
    static isEqual(frameA: Frame, frameB: Frame): boolean;
    intersect(frame: Frame): boolean;
    static intersect(frameA: Frame, frameB: Frame): boolean;
}
