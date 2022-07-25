const grid = document.querySelector('.grid') //Gets the 
const resultsDisplay = document.querySelector('.results')
const eliminatedDisplay = document.querySelector('.eliminated')
let currentIndex = 202
let width = 15
let direction = 1
let charId
let goingRight = true
let lettersRemoved = []
let results = 30
let eliminated = 0

//Creates group of 30 enemies
for (let i = 0; i < 225; i++) { 
  const square = document.createElement('div')// Creates a Square the size of the "cell" 15x15=225
  grid.appendChild(square)
}

const squares = Array.from(document.querySelectorAll('.grid div'))

const charSquad = [
  0,1,2,3,4,5,6,7,8,9,
  15,16,17,18,19,20,21,22,23,24,
  30,31,32,33,34,35,36,37,38,39
]

function draw() {
  for (let i = 0; i < charSquad.length; i++) {
    if(!lettersRemoved.includes(i)) {
      squares[charSquad[i]].classList.add('invader')
    }
  }
}

draw()

function remove() {
  for (let i = 0; i < charSquad.length; i++) {
    squares[charSquad[i]].classList.remove('invader')
  }
}

squares[currentIndex].classList.add('ship')


function moveShip(e) {
  squares[currentIndex].classList.remove('ship')
  switch(e.key) {
    case 'ArrowLeft':
      if (currentIndex % width !== 0) currentIndex -=1
      break
    case 'ArrowRight' :
      if (currentIndex % width < width -1) currentIndex +=1
      break
  }
  squares[currentIndex].classList.add('ship')
}
document.addEventListener('keydown', moveShip)

function moveInvaders() {
  const leftEdge = charSquad[0] % width === 0
  const rightEdge = charSquad[charSquad.length - 1] % width === width -1
  remove()

  if (rightEdge && goingRight) {
    for (let i = 0; i < charSquad.length; i++) {
      charSquad[i] += width +1
      direction = -1
      goingRight = false
    }
  }

  if(leftEdge && !goingRight) {
    for (let i = 0; i < charSquad.length; i++) {
      charSquad[i] += width -1
      direction = 1
      goingRight = true
    }
  }

  for (let i = 0; i < charSquad.length; i++) {
    charSquad[i] += direction
  }

  draw()

  if (squares[currentIndex].classList.contains('invader', 'ship')) {
    resultsDisplay.innerHTML = 'GAME OVER'
    clearInterval(charId)
  }

  for (let i = 0; i < charSquad.length; i++) {
    if(charSquad[i] > (squares.length)) {
      resultsDisplay.innerHTML = 'GAME OVER'
      clearInterval(charId)
    }
  }
  if (lettersRemoved.length === charSquad.length) {
    resultsDisplay.innerHTML = 'YOU WIN'
    clearInterval(charId)
  }
}
charId = setInterval(moveInvaders, 600)

function fire(e) {
  let missileID
  let currentLaserIndex = currentIndex
  function moveLaser() {
    squares[currentLaserIndex].classList.remove('laser')
    currentLaserIndex -= width
    squares[currentLaserIndex].classList.add('laser')

    if (squares[currentLaserIndex].classList.contains('invader')) {
      squares[currentLaserIndex].classList.remove('laser')
      squares[currentLaserIndex].classList.remove('invader')
      squares[currentLaserIndex].classList.add('boom')

      setTimeout(()=> squares[currentLaserIndex].classList.remove('boom'), 300)
      clearInterval(missileID)

      const alienRemoved = charSquad.indexOf(currentLaserIndex)
      lettersRemoved.push(alienRemoved)
      results--
      eliminated++
      resultsDisplay.innerHTML = 'Letters left: ' + results + '     Letters Eliminated: ' + eliminated
      console.log(lettersRemoved)

    }

  }
  switch(e.key) {
    case 'ArrowUp':
      missileID = setInterval(moveLaser, 100)
  }
}

document.addEventListener('keydown', fire)