class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.title.hide()
question.button.hide()
question.input1.hide()
question.input2.hide()
background("yellow")
fill("black")
textSize(50)
text("Result of the Quiz",250,50)
Contestant.getPlayerInfo();

if(allContestants!==undefined){
  fill("red")
  textSize(20)
  text("HELPER : ALL CONTESTANTS WHO HAVE THE CORRECT ANSWERS ARE HILIGHTED IN GREEN COLOUR",50,230)
}
for(var ctt in allContestants){
 var corrAns = "2"
  if(corrAns===allContestants[ctt].answer){
  fill("green")
  textSize(20)
  text(allContestants[ctt].name+":"+allContestants[ctt].answer,100,300)
}else{
  fill("red")
  textSize(20)
  text(allContestants[ctt].name+":"+allContestants[ctt].answer,100,350)
}
  }
    //write code to highlight contest who answered correctly
    
  }

}