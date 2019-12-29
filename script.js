const scoreText = document.getElementById('scores')
const start =()=>{
    let localScores = JSON.parse(localStorage.getItem('scores'))

    if(localScores){
        localScores.sort((a,b)=>b.score - a.score)
        let text =''
        localScores.forEach((element) => {
            text+=`<li> ${element.intials} - ${element.score}</li>`
        });
        scoreText.innerHTML = text
    }
    else{
        scoreText.textContent = "No current high scores!"
    }
}
start()

const home =()=>{ window.location.href ="./index.html"};

const clear =(info)=>{
    console.log("clearing", info)
    localStorage.clear()
    start()
};
