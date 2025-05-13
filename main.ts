//SetUp
scene.setBackgroundImage(assets.image`Background`)


//Sprite Set Up
let Player = sprites.create(assets.image`Player`, SpriteKind.Player)
Player.setStayInScreen(true)
Player.setScale(1.5, ScaleAnchor.Middle)

//Movement Set Up
controller.moveSprite(Player)
controller.right.onEvent(ControllerButtonEvent.Pressed, function() {
    
    let Player_RightMove = animation.createAnimation(50, 1000)
            
        
      
    
    

})