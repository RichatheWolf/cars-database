class Game{
    constructor(){

    }
    getState(){
        var GameStateREF = database.ref('gamestate')
        GameStateREF.on("value", function(data){gamestate = data.val()})
    }
    update(state){
        database.ref('/').update({ gameState: state });
    }
    async start(){
        if(gamestate == 0){
            player = new Player();
            var playerCountRef = await database.ref('playercount').once("value");
            if(playerCountRef.exists()){
                playercount = playerCountRef.val();
                player.getCount();
            }
            form = new Form()
            form.display();
        }
    
        car1 = createSprite(100,200);
        car1.addImage("images/car1.png", car1_img);
        car2 = createSprite(300,200);
        car2.addImage("images/car2.png", car2_img);
        car3 = createSprite(500,200);
        car3.addImage("images/car3.png", car3_img);
        car4 = createSprite(700,200);
        car4.addImage("images/car4.png", car4_img);
        cars = [car1, car2, car3, car4]
    }
    play(){
        form.hide(); 
        Player.getPlayerInfo(); 
        if(allPlayers !== undefined){
            background(rgb(198,135,103));
            image(track_img, 0, -displayHeight * 4, displayWidth, displayHeight * 5);
            //var 
            display_position = 100;
            //index of the array 
            var index = 0;
            //x and y position of the cars 
            var x = 175 ; 
            var y;
            for (var plr in allPlayers){
                index = index + 1
                x = x + 200
                y = displayHeight - allPlayers[plr].distance
                cars[index - 1].x = x
                cars[index - 1].y = y
                if (index == player.index){
                    fill("red")
                    ellipse(x, y, 60, 60)
                    cars[index - 1].shapeColor = "red"
                    camera.position.x = displayWidth/2
                    camera.position.y = cars[index - 1].y
                }
            }
            
        }
        if (keyIsDown(UP_ARROW) && player.index != null){
            player.distance += 10
            player.update()
        }
        if (player.distance > 3860){
            gamestate = 2
        }
        drawSprites();
    }
    end(){
        console.log("gameOver")
    }
}