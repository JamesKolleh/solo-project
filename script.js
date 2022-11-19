let scoreHome = document.getElementById("score-home");
let scoreAway = document.getElementById("score-away")
scoreHomeCount = 0;
scoreAwayCount = 0;

function add1home(){
scoreHomeCount += 1
scoreHome.textContent = scoreHomeCount
}

function add2home(){
scoreHomeCount += 2
scoreHome.textContent = scoreHomeCount
}
function add3home(){
scoreHomeCount += 3
scoreHome.textContent = scoreHomeCount
}

function add1away(){
scoreAwayCount += 1
scoreAway.textContent = scoreAwayCount
}
function add2away(){
scoreAwayCount += 2
scoreAway.textContent = scoreAwayCount
}
function add3away(){
scoreAwayCount += 3
scoreAway.textContent = scoreAwayCount
}

function newGame(){
    scoreAwayCount = 0
    scoreHomeCount = 0
    scoreHome.textContent = scoreHomeCount
    scoreAway.textContent = scoreAwayCount
    
}