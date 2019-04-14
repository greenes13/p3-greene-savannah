//Global Variables
const mySquares = document.getElementsByClassName ("square");
const mySecondSquares = document.getElementsByClassName('layer-2');
const myThirdSquares = document.getElementsByClassName('layer-3');

const layerOne = document.getElementbyId('layer-1');
const layerTwo = document.getElementbyId('layer-2');
const layerThree = document.getElementbyId('layer-3');


//Functionality
function loopThrough () {
  const growSquare = () => this.classList.toggle('bigger');
  for (let i = 0; i < this.textContent.length; i++) {
    setTimeout(growSquare, i * 1000);
  }
};

function loopThroughNumber () {
  const growSquare = () => this.classList.toggle('bigger');
  const numStringValue = this.textContent;
  for (let i = 0; i < Number(numStringValue * 2); i++) {
    setTimeout(growSquare, i * 1000);
  }
};

function changeSquare() {
  const change = () => {
    layerOne.classList.add('hidden');
    layerTwo.classList.remove('hidden');
  }
  setTimeout(swap, this.TextContent.length * 2000);
};

function changeSquareTwo() {
  const change = () => {
    layerTwo.classList.add('hidden');
    layerThree.classList.remove('hidden');
  }
  setTimeout(change, this.TextContent.length * 2000);
};

//Event Listener
for (let i = 0; i < mySquares.length; i++) {
   mySquares[i].addEventListener('click', loopThrough);
   mySquares[i].addEventListener('click', changeSquare)
   mySecondSquares[i].addEventListener('click', loopThrough);
   mySecondSquares[i].addEventListener('click', changeSquare);
   myThirdSquares[i].addEventListener('click', loopThrough);
   myThirdSquares[i].addEventListener('click', changeSquare);
};
