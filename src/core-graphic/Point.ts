export default class Point {
    x = 0
    y = 0

    constructor(params: { x: number; y: number }) {
        const { x, y } = params
        this.x = !isNaN(x) ? x : 0
        this.y = !isNaN(y) ? y : 0
    }

    static get zero(): Point {
        return new Point({ x: 0, y: 0 })
    }

    static isEqual(pointA: Point, pointB: Point): boolean {
        return pointA.x == pointB.x && pointA.y == pointB.y
    }

    isEqual(point: Point) {
        return Point.isEqual(this, point)
    }

    private static operator(op: string, a: Point, b: Point): Point {
        switch (op) {
            case "-":
                return new Point({
                    x: a.x - b.x,
                    y: a.y - b.y
                })
            case "+":
                return new Point({
                    x: a.x + b.x,
                    y: a.y + b.y
                })
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
