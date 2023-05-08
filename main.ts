let clover: Sprite = null
scene.setBackgroundImage(assets.image`-`)
let hero = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f 1 1 f 1 1 f . . . . . . 
    . . . f 1 1 f 1 1 f . . . . . . 
    . . . f 1 1 f 1 1 f . . . . . . 
    . . . f 1 1 1 1 1 f f . . . . . 
    . . . f 1 f 1 f 1 1 f f . . . . 
    . . . f 1 1 3 1 1 1 1 f f . . . 
    . . . f 1 1 1 1 1 1 1 1 f . . . 
    . . . f 1 1 1 1 1 1 1 f f . . . 
    . . . f 1 1 1 1 1 1 f f . . . . 
    . . . f 1 1 1 1 1 1 f . . . . . 
    . . . f 1 1 f f 1 1 f . . . . . 
    . . . f f f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(hero)
hero.setStayInScreen(true)
game.onUpdateInterval(5000, function () {
    clover = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . 7 7 7 7 . . . . . 7 7 7 7 7 .
        . 7 7 7 7 7 . . . 7 7 7 7 7 7 .
        . 7 7 7 7 7 7 . . 7 7 7 7 7 7 .
        . 7 7 7 7 7 7 . 7 7 7 7 7 7 . .
        . . 7 7 7 7 7 7 7 7 7 7 7 7 . .
        . . 7 7 7 7 7 7 7 7 7 7 . . . .
        . . . 7 7 7 7 7 7 7 7 . . . . .
        . . . . 7 7 7 7 7 7 . . . . . .
        . . . 7 7 7 7 7 7 7 7 7 . . . .
        . . 7 7 7 7 7 7 7 7 7 7 7 . . .
        . 7 7 7 7 7 7 7 . 7 7 7 7 7 . .
        . 7 7 7 7 7 7 7 . 7 7 7 7 7 . .
        . 7 7 7 7 7 . 7 7 . 7 7 7 7 . .
        . . . . . . . . 7 . . . . . . .
    `, randint(-50, 50), 50)
})
