let homeScore = document.getElementById("homescore")
let guestScore = document.getElementById("guestscore")
// console.log(homeScore)

let homeSave = document.getElementById("savehomebtn")
let guestSave = document.getElementById("saveguestbtn")

homeCount=0
guestCount=0

function plusonehome() {
    homeCount +=1
    homeScore.textContent=homeCount
}

function plustwohome() {
    homeCount +=2
    homeScore.textContent=homeCount
}

function plusthreehome() {
    homeCount +=3
    homeScore.textContent=homeCount
}



function plusoneguest() {
    guestCount +=1
    guestScore.textContent=guestCount
}

function plustwoguest() {
    guestCount +=2
    guestScore.textContent=guestCount
}

function plusthreeguest() {
    guestCount +=3
    guestScore.textContent=guestCount
}

// SAve section

function savehome() {
    // guestCount = guestCount
    homeSave.textContent +=homeCount+"- "
    homeScore.textContent=0
    homeCount=0   
}


function saveguest() {
    // guestCount = guestCount
    guestSave.textContent +=guestCount+"- "
    guestScore.textContent=0
    guestCount=0   
}