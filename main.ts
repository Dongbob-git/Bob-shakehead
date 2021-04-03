input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
})
basic.clearScreen()
basic.showLeds(`
    . # # . .
    . # . # .
    . # . # .
    . # . # .
    . # # . .
    `)
basic.pause(100)
basic.forever(function () {
    soundExpression.happy.playUntilDone()
})
