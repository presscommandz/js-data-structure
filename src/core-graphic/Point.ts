import { Equatable } from "@core/Equatable"

export default class Point implements Equatable {
    x = 0
    y = 0

    constructor(x: number, y: number) {
        this.x = !isNaN(x) ? x : 0
        this.y = !isNaN(y) ? y : 0
    }

    static get zero(): Point {
        return new Point(0, 0)
    }

    static isEqual(pointA: Point, pointB: Point): boolean {
        return pointA.x == pointB.x && pointA.y == pointB.y
    }

    isEqual(point: Point): boolean {
        return Point.isEqual(this, point)
    }

    static cloneDeep(point: Point): Point {
        return new Point(point.x, point.y)
    }

    cloneDeep(): Point {
        return Point.cloneDeep(this)
    }

    private static operator(op: string, a: Point, b: Point): Point {
        switch (op) {
            case "-":
                return new Point(a.x - b.x, a.y - b.y)
            case "+":
                return new Point(a.x + b.x, a.y + b.y)
            default:
                return Point.zero
        }
    }

    static minus(a: Point, b: Point): Point {
        return this.operator("-", a, b)
    }

    static plus(a: Point, b: Point): Point {
        return this.operator("+", a, b)
    }

    get isZero(): boolean {
        return Point.isEqual(this, Point.zero)
    }
}