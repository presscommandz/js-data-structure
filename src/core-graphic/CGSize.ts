import { Equatable } from "@core/Equatable"

export default class CGSize implements Equatable {
    width = 0
    height = 0

    constructor(width: number, height: number) {
        this.width = !isNaN(width) ? width : 0
        this.height = !isNaN(height) ? height : 0
    }

    static cloneDeep(size: CGSize): CGSize {
        return new CGSize(size.width, size.height)
    }

    cloneDeep(): CGSize {
        return CGSize.cloneDeep(this)
    }

    static get zero() {
        return new CGSize(0, 0)
    }

    static isEqual(sizeA: CGSize, sizeB: CGSize): boolean {
        return sizeA.width == sizeB.width && sizeA.height == sizeB.height
    }

    isEqual(size: CGSize): boolean {
        return CGSize.isEqual(this, size)
    }

    get isZero(): boolean {
        return CGSize.isEqual(this, CGSize.zero)
    }
}
