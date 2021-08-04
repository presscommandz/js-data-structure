import { Equatable } from "@core/Equatable"

export default class CGPoint implements Equatable {
    x = 0
    y = 0

    constructor(x: number, y: number) {
        this.x = !isNaN(x) ? x : 0
        this.y = !isNaN(y) ? y : 0
    }

    static get zero(): CGPoint {
        return new CGPoint(0, 0)
    }

    static isEqual(pointA: CGPoint, pointB: CGPoint): boolean {
        return pointA.x == pointB.x && pointA.y == pointB.y
    }

    isEqual(point: CGPoint): boolean {
        return CGPoint.isEqual(this, point)
    }

    static cloneDeep(point: CGPoint): CGPoint {
        return new CGPoint(point.x, point.y)
    }

    cloneDeep(): CGPoint {
        return CGPoint.cloneDeep(this)
    }

    private static operator(op: string, a: CGPoint, b: CGPoint): CGPoint {
        switch (op) {
            case "-":
                return new CGPoint(a.x - b.x, a.y - b.y)
            case "+":
                return new CGPoint(a.x + b.x, a.y + b.y)
            default:
                return CGPoint.zero
        }
    }

    static minus(a: CGPoint, b: CGPoint): CGPoint {
        return this.operator("-", a, b)
    }

    static plus(a: CGPoint, b: CGPoint): CGPoint {
        return this.operator("+", a, b)
    }

    get isZero(): boolean {
        return CGPoint.isEqual(this, CGPoint.zero)
    }
}
