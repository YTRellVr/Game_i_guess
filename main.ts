// SetUp
scene.setBackgroundImage(assets.image`PathWayStart`)
forever(function() {

})

// Sprite Set Up
let Computer = sprites.create(assets.image`Computer World select`, SpriteKind.Food)
Computer.setScale(1.3, ScaleAnchor.Middle)
Computer.setPosition(21, 67)

let Player = sprites.create(assets.image`Player`, SpriteKind.Player)
Player.setStayInScreen(true)
Player.setScale(1.5, ScaleAnchor.Middle)
characterAnimations.setCharacterAnimationsEnabled(Player, true)


//next area code
    

    



// Movement Set Up

controller.moveSprite(Player)
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.runFrames(Player, [], 500, characterAnimations.rule(Predicate.NotMoving))
  
    animation.runImageAnimation(Player, [], 500, false)
    animation.attachAnimation(Player, null)
    

})
