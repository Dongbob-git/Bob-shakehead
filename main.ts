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
    if (135 > input.compassHeading() && input.compassHeading() > 45) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (315 > input.compassHeading() && input.compassHeading() > 225) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (45 > input.compassHeading() || input.compassHeading() > 315) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
})
