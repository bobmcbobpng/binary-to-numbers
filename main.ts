let binary = 0
let bit = 0
let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    binary = binary + 100
    BinaryDisplay()
    music.playTone(220, music.beat(BeatFraction.Quarter))
})
input.onButtonPressed(Button.AB, function () {
    binary = binary + 1
    BinaryDisplay()
    music.playTone(494, music.beat(BeatFraction.Quarter))
})
input.onButtonPressed(Button.B, function () {
    binary = binary + 10
    BinaryDisplay()
    music.playTone(349, music.beat(BeatFraction.Quarter))
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (binary))
})
function BinaryDisplay () {
    for (let index = 0; index < binary; index++) {
        bit = 0
        x = 4
        y = 4
        while (led.point(x, y)) {
            led.unplot(x, y)
            bit = bit + 1
            x = 4 - bit % 5
            y = 4 - Math.idiv(bit, 5)
        }
        led.plot(x, y)
    }
    basic.pause(1000)
    basic.clearScreen()
}
basic.forever(function () {
	
})
