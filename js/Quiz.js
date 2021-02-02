class Quiz {
    //assign gameState value to VSC
    getState () {
        var gameref = database.ref("gameState");
        gameref.on("value",function(data){
            gameState = data.val();
        });
        
    }
    //update all the roots of gameState
    update () {
        database.ref("/").update({
            gameState : state 
        })
    }
    //to start the game, make a new contestant
    async start () {
        if(gameState === 0) {
            contestant = new Contestant();
            var contestantCountRef = await database.ref("contestantCount").once("value");
            //
            if(contestantCount.exists()) {
                contestantCount =  contestantCount.val();
                contestantCount.getCount();
            }
            question = new Question();
            question.display();
        }
       
}
play() {
    //when gameState = 1, play the game
    question.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Contestant.getContestantinfo();
    //check answers of the contestants
    if(allPlayers !== undefined){
      var display_position = 130;
      for(var plr in allPlayers){
        if (plr === "player" + contestant.index)
          fill("red")
        else
          fill("black");
        display_position+=20;
        textSize(15);
        text(allPlayers[plr].name + " : " + allPlayers[plr].distance, 120,display_position)
      }
    }
  }
}