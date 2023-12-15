input.onPinReleased(TouchPin.P2, function () {
    basic.showIcon(IconNames.Heart)
    for (let index = 0; index < 4; index++) {
        music.play(music.tonePlayable(Sound_2, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        Sound_2 += 25
    }
    Sound_2 = 698
})
input.onPinReleased(TouchPin.P1, function () {
    basic.showIcon(IconNames.Heart)
    for (let index = 0; index < 4; index++) {
        music.play(music.tonePlayable(Sound_1, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        Sound_1 += 25
    }
    Sound_1 = 440
})
let Sound_2 = 0
let Sound_1 = 0
Sound_1 = 440
Sound_2 = 698
