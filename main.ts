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
    if (input.compassHeading() < 160) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (input.compassHeading() > 200) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            . # . # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    }
})
