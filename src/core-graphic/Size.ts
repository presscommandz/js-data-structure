export default class Size {
    width = 0
    height = 0

    constructor(
        params: Partial<{ width: number; height: number; size: Size }>
    ) {
        const { width, height, size } = params
        if (size) {
            this.width = size.width || 0
            this.height = size.height || 0
        } else {
            this.width = !isNaN(width) ? width : 0
            this.height = !isNaN(height) ? height : 0
        }
    }

    static get zero() {
        return new Size({ width: 0, height: 0 })
    }

    static isEqual(sizeA: Size, sizeB: Size): boolean {
        return sizeA.width == sizeB.width && sizeA.height == sizeB.height
    }

    isEqual(size: Size) {
        return Size.isEqual(this, size)
    }

    get isZero(): boolean {
        return Size.isEqual(this, Size.zero)
    }
}
