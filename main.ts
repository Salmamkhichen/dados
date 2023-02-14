let Dado = 0
input.onGesture(Gesture.Shake, function () {
    Dado = randint(1, 6)
    if (6 == Dado) {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
    } else if (5 == Dado) {
        basic.showLeds(`
            # . . . #
            . . . # .
            . . # . .
            . . . . .
            # . . . #
            `)
    } else {
        if (true) {
        	
        }
    }
})
basic.forever(function () {
	
})
