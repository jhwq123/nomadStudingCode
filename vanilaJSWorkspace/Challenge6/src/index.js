const h2 = document.querySelector("h2"),
    range = document.querySelector(".range"),
    numberForm = document.querySelector(".numberForm"),
    playButton = document.querySelector(".playButton"),
    choiceText = document.querySelector(".choiceText"),
    resultText = document.querySelector(".resultText");

function handleDrag()
{
    const MaxNumber = range.value;
    h2.innerText = `Generate a nbumber between 0 and ${MaxNumber}`;
}

function handleClick()
{
    const choiceYou = parseInt(numberForm.value);
    const choiceMachine = genRandom();
    if (numberForm.value !== "")
    {
        choiceText.innerText = `You chose: ${choiceYou}, the machine chose: ${choiceMachine}`;
        if(choiceYou === choiceMachine){
            resultText.innerText = "You Won!";
        }
        else{
            resultText.innerText = "You lost!";
        }

    }
    else{
        choiceText.innerText = "";
        resultText.innerText = "";
    }

}

function genRandom()
{
    const number = Math.floor(Math.random() * range.value);
    return number;
}

function init()
{
    range.addEventListener("input", handleDrag);
    playButton.addEventListener("click", handleClick);
}

init();