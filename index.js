// Global variables 

let homeScore = 0;
let guestScore = 0;
let totalHomeScore = document.getElementById('home-score')
let totalGuestScore = document.getElementById('guest-score')

// Home team score functions

function addOneHome() {
     let add1Point = homeScore += 1
     console.log(add1Point)
     totalHomeScore.textContent = add1Point      
}

function addTwoHome() {
  let add2Points = homeScore += 2
  console.log(add2Points)
  totalHomeScore.textContent = add2Points 
}

function addThreeHome() {
  let add3Points = homeScore += 3
  console.log(add3Points)
  totalHomeScore.textContent = add3Points 
}

// Guest team score functions

function addOneGuest() {
     let add1Point = guestScore += 1
     console.log(add1Point)
     totalGuestScore.textContent = add1Point      
}

function addTwoGuest() {
  let add2Points = guestScore += 2
  console.log(add2Points)
  totalGuestScore.textContent = add2Points 
}

function addThreeGuest() {
  let add3Points = guestScore += 3
  console.log(add3Points)
  totalGuestScore.textContent = add3Points 
}