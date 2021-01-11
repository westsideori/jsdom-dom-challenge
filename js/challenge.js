let counter = document.getElementById("counter");

let pauseStatus = false

function raiseCounter(){
    
    if (!pauseStatus){
        counter.innerHTML++
    };
};

document.addEventListener("DOMContentLoaded", function () {
    setInterval(raiseCounter, 1000)
})

function lowerCounter(){
    if (counter.innerHTML > 0){
        counter.innerHTML--
    }
};

let likeObject = {};

function likeNumber(){
    let currentNumber = counter.innerHTML;
    let likeList = document.getElementsByClassName("likes")[0];
    let newLike = document.createElement("li");
    newLike.id = currentNumber
    if (likeObject[currentNumber]){
        likeObject[currentNumber]++;
        document.getElementById(currentNumber).innerHTML = `Number ${currentNumber} was liked ${likeObject[currentNumber]} times.`
    } else {
        likeObject[currentNumber] = 1;
        newLike.innerHTML = `Number ${currentNumber} was liked ${likeObject[currentNumber]} time.`
        likeList.appendChild(newLike)
    };
};

function pause(){
    pauseStatus = !pauseStatus;
    if (pauseStatus){
        document.getElementById("minus").disabled = true;
        document.getElementById("plus").disabled = true;
        document.getElementById("heart").disabled = true;
        document.getElementById("pause").innerText = 'resume'
    } else {
        document.getElementById("minus").disabled = false;
        document.getElementById("plus").disabled = false;
        document.getElementById("heart").disabled = false;
        document.getElementById("pause").innerText = 'pause'
    };
};

function comment(){
    let commentInput = document.getElementById("comment-input").value;
    let commentSection = document.getElementById("list");
    let newPP = document.createElement("p");
    newPP.innerHTML = commentInput;
    commentSection.appendChild(newPP);
    
}




document.addEventListener("click", function (e) {
    if (e.target.id === "minus"){
        lowerCounter();
    } else if (e.target.id === "plus"){
        raiseCounter();
    } else if (e.target.id === "heart"){
        likeNumber();
    } else if (e.target.id === "pause"){
        pause();
    } else if (e.target.id === 'submit'){
        e.preventDefault();
        comment();
    };
    
});
