let num = 0
num += 129
if (num > 0) {
    game.splash("Positive Value:", num)
} else if (num < 0) {
    game.splash("Negative Value:", num)
} else {
    game.splash("Zero Value:", num)
}
