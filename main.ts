// SetUp
scene.setBackgroundImage(assets.image`PathWayStart`)

forever(function() {
})

 //next area code



// Sprite Set Up
let Computer = sprites.create(assets.image`Computer World select`, SpriteKind.Food)
Computer.setScale(1.3, ScaleAnchor.Middle)
Computer.setPosition(21, 67)
let Player = sprites.create(assets.image`PlayerFront`, SpriteKind.Player)
Player.setStayInScreen(true)
Player.setScale(1.5, ScaleAnchor.Middle)

forever(function () {
	
})

//Movement Set Up
controller.moveSprite(Player)

//MoveUp
forever(function () {
    while (controller.player1.isPressed(ControllerButton.Up)) {
        Player.setImage(assets.image`MoveUp2`)
        pause(300)
        Player.setImage(assets.image`MoveUp1`)
        pause(300)
    }
})


//MoveLeft
forever(function () {
    while (controller.player1.isPressed(ControllerButton.Left)) {
        Player.setImage(assets.image`MoveLeft2`)
        pause(300)
        Player.setImage(assets.image`MoveLeft1`)
        pause(300)
    }
})



//MoveDown
forever(function () {
    while (controller.player1.isPressed(ControllerButton.Down)) {
        Player.setImage(assets.image`MoveDown2`)
        pause(300)
        Player.setImage(assets.image`PlayerFront`)
        pause(300)
    }
})




//MoveRight
forever(function () {
    while (controller.player1.isPressed(ControllerButton.Right)) {
        Player.setImage(assets.image`MoveRight2`)
        pause(300)
        Player.setImage(assets.image`MoveRight1`)
        pause(300)
    }
})
