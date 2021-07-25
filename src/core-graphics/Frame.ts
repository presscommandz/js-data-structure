import Size from "@core-graphics/Size"
import Point from "@core-graphics/Point"

export default class Frame {
    x = 0
    y = 0
    width = 0
    height = 0

    constructor(
        params: Partial<{
            x: number
            y: number
            width: number
            height: number
            point: Point
            size: Size
        }>
    ) {
        const { x, y, width, height, point, size } = params
        if (point) {
            this.x = point.x || 0
            this.y = point.y || 0
        } else {
            this.x = !isNaN(x) ? x : 0
            this.y = !isNaN(y) ? y : 0
        }

        if (size) {
            this.width = size.width || 0
            this.height = size.height || 0
        } else {
            this.width = !isNaN(width) ? width : 0
            this.height = !isNaN(height) ? height : 0
        }
    }

    static get zero(): Frame {
        return new Frame({ x: 0, y: 0, width: 0, height: 0 })
    }

    get centerX(): number {
        return this.x + (this.width >> 1)
    }

    get centerY(): number {
        return this.y + (this.height >> 1)
    }

    get maxX(): number {
        return this.x + this.width
    }

    get maxY(): number {
        return this.y + this.height
    }

    get origin(): Point {
        const point = new Point({ x: this.x, y: this.y })
        return point
    }

    set origin(value: Point) {
        this.x = value.x
        this.y = value.y
    }

    get size(): Size {
        const size = new Size({ width: this.width, height: this.height })
        return size
    }

    set size(value: Size) {
        this.width = value.width
        this.height = value.height
    }

    get isZero(): boolean {
        return Frame.isEqual(this, Frame.zero)
    }

    // utilities

    isEqual(frame: Frame): boolean {
        return (
            this.x == frame.x &&
            this.y == frame.y &&
            this.width == frame.width &&
            this.height == frame.height
        )
    }
    static isEqual(frameA: Frame, frameB: Frame): boolean {
        return (
            frameA.x == frameB.x &&
            frameA.y == frameB.y &&
            frameA.width == frameB.width &&
            frameA.height == frameB.height
        )
    }

    intersect(frame: Frame) {
        let h =
            (this.x <= frame.x && frame.x <= this.maxX) ||
            (this.x <= frame.maxX && frame.maxX <= this.maxX) ||
            (this.x >= frame.x && frame.maxX >= this.maxX)
        let v =
            (this.y <= frame.y && frame.y <= this.maxY) ||
            (this.y <= frame.maxY && frame.maxY <= this.maxY) ||
            (this.y >= frame.y && frame.maxY >= this.maxY)

        return h && v
    }

    static intersect(frameA: Frame, frameB: Frame) {
        let h =
            (frameA.x <= frameB.x && frameB.x <= frameA.maxX) ||
            (frameA.x <= frameB.maxX && frameB.maxX <= frameA.maxX) ||
            (frameA.x >= frameB.x && frameB.maxX >= frameA.maxX)
        let v =
            (frameA.y <= frameB.y && frameB.y <= frameA.maxY) ||
            (frameA.y <= frameB.maxY && frameB.maxY <= frameA.maxY) ||
            (frameA.y >= frameB.y && frameB.maxY >= frameA.maxY)
        return h && v
    }
}
