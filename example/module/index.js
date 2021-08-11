import { CoreGraphic } from "@hlworld/js-data-structure"
import { CGSize, CGFrame } from "@hlworld/js-data-structure/core-graphic"

let x = new CoreGraphic.CGPoint(1, 1)

console.log(x)
console.log(new CGSize(1, 1))

console.log(
    CGFrame.union([
        new CGFrame({ x: 0, y: 0, width: 10, height: 5 }),
        new CGFrame({ x: 8, y: 3, width: 6, height: 8 })
    ])
)
