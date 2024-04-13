let userColor = [];
let systemColor = [];
let isStarted = false;
let level = 0;
let btns = ["Red", "Yellow", "Blue", "Black"];
let max = 0;

let heading = document.querySelector('h2');
let maxScore = document.querySelector("h3");

document.addEventListener("keypress", function () {
    if (isStarted == false) {
        isStarted = true;
        levelUp();
    }
})

// handling the user clicks on the buttons

let allBtns = document.querySelectorAll(".btn");
for (Btn of allBtns) {
    Btn.addEventListener("click", userClick);
}

function userClick() {
    let btn = this;
    let userPress = btn.getAttribute("id");
    userColor.push(userPress);
    // console.log(userColor);
    Userflash(btn);

    checkans(userColor.length - 1);
}

function checkans(idx) {
    if (userColor[idx] == systemColor[idx]) {
        if (userColor.length == systemColor.length) {
            setTimeout(levelUp, 1300);
        }
    } else {
        heading.innerHTML = `Game Over !! <b>Your Score is ${level}</b> <br> Press Any key to re-start the game..`;
        if(level > max){
            max = level;
            maxScore.innerHTML=`Your Heigest score : <b>${max}</b>`;
        }
        reset();
    }
}

function reset(){
    level = 0;
    userColor = [];
    systemColor = [];
    isStarted = false;
}

// level up function

function levelUp() {
    userColor= [];
    level++;
    heading.innerText = `Game Level : ${level}`;
    
    let random = Math.floor(Math.random() * 4);
    let randColor = btns[random];
    systemColor.push(randColor);
    console.log(systemColor);
    let btnColor = document.querySelector(`.${randColor}`);
    Gameflash(btnColor);
}

function Userflash(btn) {
    btn.classList.add("Userflash");
    setTimeout(() => {
        btn.classList.remove("Userflash");
    }, 250);
}

function Gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 400);
}