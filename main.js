var startBtn = document.getElementById("startB");
var questionHeading = document.getElementById("questions");
var answerslist = document.getElementById("answers");
var timeDom = document.getElementById('timer');
var count = 0
var timeInterval
var timeLeft = questions.length * 15;
const timed = () => {

    timeInterval = setInterval(function () {
        timeLeft--;
        console.log(timeLeft)
        timeDom.textContent = 'Time left: ' + timeLeft
        if (timeLeft === 0) {
            clearInterval(timeInterval);
        }

    }, 1000);
}
startBtn.addEventListener("click", function (event) {
    document.getElementById("startscreen").classList.add("d-none")
    document.getElementById("questionscreen").classList.remove("d-none")
    timed()
    printButtons()
});

const printButtons = () => {
    questionHeading.textContent = questions[count].title;
    answersList.innerHTML = "";
    var choices = questions[count].choices;
    for (var i = 0; i < choices.length; i++) {
        var newChoice = document.createElement("div");
        newChoice.innerHTML = "<button onclick = check('" + choices[i] + "')>" + choices[i] + "</button>";
        answersList.appendChild(newChoice);
    }

}
var check = guess => {
    if (questions[count].answer === guess) {
        console.log('you are correct')
    }
    else {
        timeLeft -= 10
        console.log('you are wrong')
    }
    count++
    if (questions.length === count) {
        clearInterval(timeInterval)
        console.log('game over')
        endGame()
    }
    else {
        printButtons()
    }
}
const endGame = () => {
    questionHeading.innerHTML = '<h1> Game Over!</h1>'
    answersList.innerHTML = '<input> Initials here'
}