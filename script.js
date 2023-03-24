//1 is rock, 2 is paper, 3 is scissors

var getComputerChoice = function() {
    let choice =  Math.floor((Math.random() * 3) +1);
    console.log(choice);
    if(choice ===1 ){ choice = "rock";}
    if(choice === 2) { choice = "paper";}
    if(choice === 3) { choice = "scissors";}

    return choice;
};


var getPlayerChoice = function() {
   /* $(".input button").on("click",function(event){
        var $choice = $("input");
        return choice.toLowerCase;
    }) */
    let choice = prompt();
    while(choice.toLowerCase() !== "paper" && choice.toLowerCase() !== "rock" && choice.toLowerCase() !== "scissors" )
        { window.alert("Errore, Scrivi rock, paper, o scissors");
        choice = prompt(); }
        
    return(choice.toLowerCase())
};

var Play = function(choiceCP, choiceHP){
    if (choiceCP === choiceHP)
        {console.log("Tie!");
        return false;}
    if( choiceHP === "rock" && choiceCP == "scissors" ||  choiceHP === "scissors" && choiceCP == "paper"  || choiceHP === "paper" && choiceCP == "rock")
        { console.log("Hai vinto!");}
    else { console.log("hai perso");}
    return false;


};



var main = function() {
    for(let i = 0; i < 5; i++){
    var choiceCP;
    choiceCP = getComputerChoice();
    const choiceHP = getPlayerChoice();
    console.log("Game" +i+1);
    console.log("Scelta CP:" + choiceCP);
    console.log("Scelta HP:" + choiceHP);
    var game = Play(choiceCP, choiceHP);}};

$(document).ready(main);