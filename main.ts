// SetUp
scene.setBackgroundImage(assets.image`PathWayStart`)
forever(function() {

})

// Sprite Set Up
let Computer = sprites.create(assets.image`Computer World select`, SpriteKind.Food)
Computer.setScale(1.3, ScaleAnchor.Middle)
Computer.setPosition(21, 67)

let Player = sprites.create(assets.image`PlayerFront`, SpriteKind.Player)
Player.setStayInScreen(true)
Player.setScale(1.5, ScaleAnchor.Middle)
characterAnimations.setCharacterAnimationsEnabled(Player, true)


//next area code
    

    



// Movement Set Up

controller.moveSprite(Player)
  
    

controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function() {
    
    Player.setImage(assets.image`MoveRight1`)
    pause(500)
    Player.setImage(assets.image`MoveRight2`)
    pause(500)
   

    controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Released, function () {

        Player.setImage(assets.image`MoveRight1`)



    })

})

