// SetUp
scene.setBackgroundImage(assets.image`PathWayStart`)
forever(function() {
    console.log(null)

})

// Sprite Set Up


let Player = sprites.create(assets.image`Player`, SpriteKind.Player)
Player.setStayInScreen(true)
Player.setScale(1.5, ScaleAnchor.Middle)
let Hitbox_Up = sprites.create(assets.image`Hitbox up start`, SpriteKind.Food)
Hitbox_Up.setScale(1.5, ScaleAnchor.Middle)
Hitbox_Up.setPosition(71, 7)

//next area code
    
if (true) {
        
    Player.overlapsWith(Hitbox_Up)

    }

// Movement Set Up


controller.moveSprite(Player)
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {

  
    
animation.runImageAnimation(Player, [], 500, false)

})
