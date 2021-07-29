export default class Point {
    x: number;
    y: number;
    constructor(x: number, y: number);
    static get zero(): Point;
    static isEqual(pointA: Point, pointB: Point): boolean;
    isEqual(point: Point): boolean;
    private static operator;
    static minus(a: Point, b: Point): Point;
    static plus(a: Point, b: Point): Point;
    get isZero(): boolean;
}
