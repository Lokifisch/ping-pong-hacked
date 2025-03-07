input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    radio.sendValue("Ping", 0)
})
radio.onReceivedValue(function (name, value) {
    if (name == "Pong") {
        basic.showString("" + (Funk - 1))
    }
})
let Funk = 0
Funk = 0
radio.setGroup(Funk)
basic.forever(function () {
    radio.setGroup(Funk)
    Funk += 1
    radio.sendValue("Ping", 0)
})
