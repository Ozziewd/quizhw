var startBtn = document.getElementById("startB");
var questionHeading = document.getElementById("questions");
var answerslist = document.getElementById("answers");
startBtn.addEventListener("click", function (event) {
    document.getElementById("startscreen").classList.add("d-none")
    document.getElementById("questionscreen").classList.remove("d-none")
});
questionHeading.textContent = questions[0].title;
answerslist.innerHTML = "";    
var choices = questions[0].choices;
for (var i = 0; i < choices.length; i++) {
    var newChoice = document.createElement("div");
    newChoice.textContent = choices[i];
    answerslist.appendChild(newChoice);
} 