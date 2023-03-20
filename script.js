var main = function getComputerChoice()
{
    let choice =  Math.floor((Math.random() * 3) +1);
    console.log(choice);
    return choice;
}



$(document).ready(main);