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
