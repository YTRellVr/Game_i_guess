// SetUp
scene.setBackgroundImage(assets.image`PathWayStart`)


 //next area code



// Sprite Set Up
let Computer = sprites.create(assets.image`Computer World select`, SpriteKind.Food)
Computer.setScale(1.3, ScaleAnchor.Middle)
Computer.setPosition(21, 67)
let Player = sprites.create(assets.image`PlayerFront`, SpriteKind.Player)
Player = sprites.create(assets.image`PlayerFront`, SpriteKind.Player)
Player.setStayInScreen(true)
Player.setScale(1.5, ScaleAnchor.Middle)

forever(function () {
	
})

//Movement Set Up
controller.moveSprite(Player)

//MoveUp


//MoveLeft



//MoveDown
forever(function () {
    while (controller.player1.isPressed(ControllerButton.Down)) {
        Player.setImage(assets.image`PlayerFront`)
        pause(300)
        Player.setImage(assets.image`MoveDown2`)
        pause(300)
    }
})

forever(function () {
    while (controller.player1.isPressed(ControllerButton.Down)) {
        Player.setImage(assets.image`PlayerFront`)
        pause(300)
        Player.setImage(assets.image`MoveDown2`)
        pause(300)
    }
})

//MoveRight