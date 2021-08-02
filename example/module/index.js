import { CoreGraphic } from "@presscommandz/js-data-structure"

const { Point, Frame, Size } = CoreGraphic

let pointA = new Point(1, 2)
let pointA1 = new Point()
let pointx1 = Point.cloneDeep(pointA)
let pointx2 = pointx1.cloneDeep()

console.log(pointx1, pointx2)

let pointA2 = Point.plus(pointA1, pointA)
let isEqual = Point.isEqual(pointA, pointA1)

let sizeA = new Size({ width: 1, height: 2 })
let sizeB = Size.zero
let sizeC = new Size({ size: sizeA })

let isEqualSize = Size.isEqual(sizeA, sizeB)


let frameA = new Frame({ point: pointA, size: sizeA })
let frameB = new Frame({ point: pointA1, size: sizeC })

let isIntersect = frameB.intersect(frameA)