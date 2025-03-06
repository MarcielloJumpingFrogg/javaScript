const options = [3, 1, 2, 3, 1];

let rock = document.getElementById("rock")

let paper = document.getElementById("paper")

let scissor = document.getElementById("scissor")


let playerScore = 0
let botScore = 0

let playerDisplayedScore = document.getElementById("playerScore")
let botDisplayedScore = document.getElementById("btoScore")



rock.onclick = function() {play(1)}

paper.onclick = function() {play(2)}

scissor.onclick = function() {play(3)}

function play(player) 
{
    botChoice = bot()

    if (options[player - 1] == botChoice )
    { 
        playerScore++
        playerDisplayedScore.innerText = "Player Score: " + playerScore
    }

    //if ( options[player] == botChoice ) 
    
    if ( options[player + 1] == botChoice )
    {    
        botScore++
        botDisplayedScore.innerText = "Bot Score: " + botScore; 
    }
    createHistory(translator(player) , translator(botChoice))

}   


function bot()
{
    botChoice = Math.floor(Math.random() * 3 + 1)
    return botChoice;
}


function translator(choice)
{
    if(choice == 1) 
        return ("rock")

    if(choice == 2)
        return ("paper")

    if(choice == 3)
        return ("scissor")
}

function createHistory(player, bot)
{
    let history = document.getElementById("history")



    div = document.createElement("div")
    let playerC = document.createElement("p")
    let botC = document.createElement("p")

    playerC.innerText = ("Player = "+  player)
    div.appendChild(playerC)
    botC.innerText = ("Bot = "+ bot)
    div.appendChild(botC)

    history.appendChild(div)
}