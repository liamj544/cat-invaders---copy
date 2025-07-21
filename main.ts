controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    chocolate = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e . . . . . . . . . 
        . . . . . . e . . . . . . . . . 
        . . . . . . e . . . . . . . . . 
        . . . . . . e . . . . . . . . . 
        . . . . . . e . . . . . . . . . 
        . . . . . . e . . . . . . . . . 
        . . . . . . e . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, cat, 0, -100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(null, effects.bubbles, 500)
    sprites.destroy(otherSprite, effects.fire, 100)
    info.changeScoreBy(1)
})
let enemySprite: Sprite = null
let chocolate: Sprite = null
let cat: Sprite = null
game.splash("Liam Jackson Presents Cat Invaders Advisory This Game is A Work Of Ficton Do NOT IMITATE THE GAME")
scene.setBackgroundColor(5)
cat = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . e e e . . . e e e . . 
    . . . . . e e e . . . e e e . . 
    . . . . . e e e . . . e e e . . 
    . . . . . . . . . . . . . . . . 
    . . . . . e e e e e e e e e . . 
    . . . . . e e e 3 3 3 e e e . . 
    . . . . . e e e 3 3 3 e e e . . 
    . . . . . e e e 3 3 3 e e e e . 
    . . . . . e e e e e e e e e e . 
    . . . . . e e e e e e e e e e . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
cat.setPosition(73, 90)
controller.moveSprite(cat, 100, 0)
cat.setStayInScreen(true)
info.setScore(0)
game.onUpdateInterval(500, function () {
    enemySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f . . f . . . . . . . . 
        . . . . f f f f . . . . . . . . 
        . . . . f f f f . . . . . . . . 
        . . . . f f 3 f . . . . . . . . 
        . . . . f f f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    enemySprite.setPosition(randint(10, 160), 0)
    enemySprite.setVelocity(0, 50)
})
