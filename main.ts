pins.onPulsed(DigitalPin.P0, PulseValue.High, function () {
    Fentes += 1
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    control.reset()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Go") {
        debute = 2
        basic.pause(3000)
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
        debute = 0
    }
})
let debute = 0
radio.setGroup(1)
pins.setPull(DigitalPin.P0, PinPullMode.PullDown)
let Fentes = 0
let f1 = 0
let f2 = 0
debute = 0
basic.showIcon(IconNames.No)
basic.forever(function () {
    while (debute == 2) {
        f1 = Fentes
        if (f1 > f2) {
            radio.sendNumber(Fentes)
        }
        f2 = f1
        basic.pause(100)
    }
})
