//----------------> DOM variable declarations

let nameBox = document.querySelectorAll('.nameBox')
let playerName = nameBox[0]
let alienName = nameBox[1]

//Player stats
let pHull = document.getElementById('pHull')
let pFP = document.getElementById('pFP')
let pAcc = document.getElementById('pAcc')

//Enemy stats
let eHull = document.getElementById('eHull')
let eFP = document.getElementById('eFP')
let eAcc = document.getElementById('eAcc')


// CLASS literal declarations
class ShipFactory {
    constructor(name, hull, firePower, accuracy) {
        this.name = name
        this.hull = hull
        this.firePower = firePower
        this.accuracy = accuracy
    }
}

//Creates new Earth ships
const ussHelloWorld = new ShipFactory('USS HelloWorld', 20, 5, .7)

//Creates new Alien ships
let alienList = ['Enemy 1', 'Enemy 2','Enemy 3', 'Enemy 4','Enemy 5', 'Enemy 6']
let name = alienList[1]
let hull = 6
let firePower = 3
let accuracy = .6
const alienShip = new ShipFactory(name, hull, firePower, accuracy)

//----------------> DOM Manipulation

    //Player ship info
playerName.textContent = ussHelloWorld.name
pHull.textContent = 'Hull: ' + ussHelloWorld.hull
pFP.textContent = 'FirePower: ' + ussHelloWorld.firePower
pAcc.textContent = 'Accuracy: ' + ussHelloWorld.accuracy
   
    //Alien ship info
alienName.textContent = alienShip.name
eHull.textContent = 'Hull: ' + alienShip.hull
eFP.textContent = 'FirePower: ' + alienShip.firePower
eAcc.textContent = 'Accuracy: ' + alienShip.accuracy

//----------------> Battle Mode
while(startGame == true)



if (Math.random() < alien[0].accuracy) {
    console.log('You have been hit!');
}

//----------------> 