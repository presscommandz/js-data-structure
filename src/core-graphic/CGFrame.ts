import CGSize from "@core-graphic/CGSize"
import CGPoint from "@core-graphic/CGPoint"
import { Equatable } from "@core/Equatable"

export default class CGFrame implements Equatable {
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
            point: CGPoint
            size: CGSize
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

    static get zero(): CGFrame {
        return new CGFrame({ x: 0, y: 0, width: 0, height: 0 })
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

    get origin(): CGPoint {
        const point = new CGPoint(this.x, this.y)
        return point
    }

    set origin(value: CGPoint) {
        this.x = value.x
        this.y = value.y
    }

    get size(): CGSize {
        const size = new CGSize(this.width, this.height)
        return size
    }

    set size(value: CGSize) {
        this.width = value.width
        this.height = value.height
    }

    get isZero(): boolean {
        return CGFrame.isEqual(this, CGFrame.zero)
    }

    static cloneDeep(frame: CGFrame): CGFrame {
        return new CGFrame({
            x: frame.x,
            y: frame.y,
            width: frame.width,
            height: frame.height
        })
    }

    cloneDeep(): CGFrame {
        return CGFrame.cloneDeep(this)
    }

    isEqual(frame: CGFrame): boolean {
        return CGFrame.isEqual(this, frame)
    }
    static isEqual(frameA: CGFrame, frameB: CGFrame): boolean {
        return (
            frameA.x == frameB.x &&
            frameA.y == frameB.y &&
            frameA.width == frameB.width &&
            frameA.height == frameB.height
        )
    }

    isIntersect(frame: CGFrame): boolean {
        return CGFrame.isIntersect(this, frame)
    }

    static isIntersect(frameA: CGFrame, frameB: CGFrame) {
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
