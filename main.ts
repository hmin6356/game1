input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P2, 180)
})
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P2, 90)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P2, 0)
})
let 점수 = 0
pins.servoWritePin(AnalogPin.P2, 90)
let 수 = randint(1, 50)
basic.forever(function () {
    if (수 == 점수 || 수 < 점수) {
        pins.servoWritePin(AnalogPin.P2, 80)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P2, 5)
        basic.pause(500)
    }
})
basic.forever(function () {
    if (10 > pins.analogReadPin(AnalogPin.P1)) {
        점수 += 1
        basic.showNumber(1)
    } else if (60 > pins.analogReadPin(AnalogPin.P1)) {
        점수 += 2
        basic.showNumber(2)
    } else if (100 > pins.analogReadPin(AnalogPin.P1)) {
        점수 += 3
        basic.showNumber(3)
    } else if (140 > pins.analogReadPin(AnalogPin.P1)) {
        점수 += 4
        basic.showNumber(4)
    } else if (550 > pins.analogReadPin(AnalogPin.P1)) {
        점수 += 5
        basic.showNumber(5)
    }
})
