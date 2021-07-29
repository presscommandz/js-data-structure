class Size {
    constructor(params) {
        this.width = 0;
        this.height = 0;
        const { width, height, size } = params;
        if (size) {
            this.width = size.width || 0;
            this.height = size.height || 0;
        }
        else {
            this.width = !isNaN(width) ? width : 0;
            this.height = !isNaN(height) ? height : 0;
        }
    }
    static get zero() {
        return new Size({ width: 0, height: 0 });
    }
    static isEqual(sizeA, sizeB) {
        return sizeA.width == sizeB.width && sizeA.height == sizeB.height;
    }
    isEqual(size) {
        return Size.isEqual(this, size);
    }
    get isZero() {
        return Size.isEqual(this, Size.zero);
    }
}

class Point {
    constructor(x, y) {
        this.x = 0;
        this.y = 0;
        this.x = !isNaN(x) ? x : 0;
        this.y = !isNaN(y) ? y : 0;
    }
    static get zero() {
        return new Point(0, 0);
    }
    static isEqual(pointA, pointB) {
        return pointA.x == pointB.x && pointA.y == pointB.y;
    }
    isEqual(point) {
        return Point.isEqual(this, point);
    }
    static operator(op, a, b) {
        switch (op) {
            case "-":
                return new Point(a.x - b.x, a.y - b.y);
            case "+":
                return new Point(a.x + b.x, a.y + b.y);
            default:
                return Point.zero;
        }
    }
    static minus(a, b) {
        return this.operator("-", a, b);
    }
    static plus(a, b) {
        return this.operator("+", a, b);
    }
    get isZero() {
        return Point.isEqual(this, Point.zero);
    }
}

class Frame {
    constructor(params) {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        const { x, y, width, height, point, size } = params;
        if (point) {
            this.x = point.x || 0;
            this.y = point.y || 0;
        }
        else {
            this.x = !isNaN(x) ? x : 0;
            this.y = !isNaN(y) ? y : 0;
        }
        if (size) {
            this.width = size.width || 0;
            this.height = size.height || 0;
        }
        else {
            this.width = !isNaN(width) ? width : 0;
            this.height = !isNaN(height) ? height : 0;
        }
    }
    static get zero() {
        return new Frame({ x: 0, y: 0, width: 0, height: 0 });
    }
    get centerX() {
        return this.x + (this.width >> 1);
    }
    get centerY() {
        return this.y + (this.height >> 1);
    }
    get maxX() {
        return this.x + this.width;
    }
    get maxY() {
        return this.y + this.height;
    }
    get origin() {
        const point = new Point(this.x, this.y);
        return point;
    }
    set origin(value) {
        this.x = value.x;
        this.y = value.y;
    }
    get size() {
        const size = new Size({ width: this.width, height: this.height });
        return size;
    }
    set size(value) {
        this.width = value.width;
        this.height = value.height;
    }
    get isZero() {
        return Frame.isEqual(this, Frame.zero);
    }
    // utilities
    isEqual(frame) {
        return Frame.isEqual(this, frame);
    }
    static isEqual(frameA, frameB) {
        return (frameA.x == frameB.x &&
            frameA.y == frameB.y &&
            frameA.width == frameB.width &&
            frameA.height == frameB.height);
    }
    intersect(frame) {
        return Frame.intersect(this, frame);
    }
    static intersect(frameA, frameB) {
        let h = (frameA.x <= frameB.x && frameB.x <= frameA.maxX) ||
            (frameA.x <= frameB.maxX && frameB.maxX <= frameA.maxX) ||
            (frameA.x >= frameB.x && frameB.maxX >= frameA.maxX);
        let v = (frameA.y <= frameB.y && frameB.y <= frameA.maxY) ||
            (frameA.y <= frameB.maxY && frameB.maxY <= frameA.maxY) ||
            (frameA.y >= frameB.y && frameB.maxY >= frameA.maxY);
        return h && v;
    }
}

var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Frame: Frame,
    Point: Point,
    Size: Size
});

export { index as CoreGraphic };
//# sourceMappingURL=index.mjs.map
