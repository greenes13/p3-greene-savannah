//Global Variables
const mySquares = document.getElementsByClassName ("square");
const myFirstSquares = document.getElementsByClassName ('layer-1')
const mySecondSquares = document.getElementsByClassName('layer-2');
const myThirdSquares = document.getElementsByClassName('layer-3');

const layerOne = document.getElementById('layer-1-tan', 'layer-1-orange', 'layer-1-pink', 'layer-1-red');
const layerTwo = document.getElementById('layer-2-tan', 'layer-2-orange', 'layer-2-pink', 'layer-2-red');
const layerThree = document.getElementById('layer-3-tan', 'layer-3-orange', 'layer-3-pink', 'layer-3-red');


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
    myFirstSquares.classList.add('hidden');
    mySecondSquares.classList.remove('hidden');
  }
  setTimeout(change, this.textContent.length * 2000);
};

function changeSquareTwo() {
  const change = () => {
    mySecondSquares.classList.add('hidden');
    myThirdSquares.classList.remove('hidden');
  }
  setTimeout(change, this.textContent.length * 2000);
};

//Event Listener
for (let i = 0; i < mySquares.length; i++) {
   myFirstSquares[i].addEventListener('click', loopThrough);
   myFirstSquares[i].addEventListener('click', changeSquare)
   mySecondSquares[i].addEventListener('click', loopThroughNumber);
   mySecondSquares[i].addEventListener('click', changeSquareTwo);
   myThirdSquares[i].addEventListener('click', loopThroughNumber);
   myThirdSquares[i].addEventListener('click', message);
};

// Messages

const message = document.getElementsByClassName ('message');

const myRandomMessage= document.createElement('p');
const messageWrapper = document.getElementById('advice');
messageWrapper.appendChild(myRandomMessage);

const placeholderText = document.createTextNode('');
myRandomMessage.appendChild(placeholderText);

const messageItems = ['Message-1', 'Message-2', 'Message-3']

const sortMessages = function() {
  messageItems.sort(function(a, b){return 0.5 - Math.random()});
  const myRandomMessageFiller = document.createTextNode(messageItems[0]);
  myRandomMessage.appendChild(myRandomMessageFiller);
  const mySquare = document.getElementById('layer-3');
  mySquare.removeChild(section);
  myRandomMessage.classList.remove('hidden');
};

message[i].addEventListener('click', sortMessages);
