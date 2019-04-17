//Global Variables
const mySquares = document.getElementsByClassName ("square");
const myFirstSquares = document.getElementsByClassName ('layer-1')
const mySecondSquares = document.getElementsByClassName('layer-2');
const myThirdSquares = document.getElementsByClassName('layer-3');


//Functionality
function loopThrough () {
  const growSquare = () => this.classList.toggle('bigger');
  for (let i = 0; i < this.textContent.length; i++) {
    setTimeout(growSquare, i * 1000);
  }
};

function loopThroughNumber () {
  const growSquare = () => this.classList.toggle('swing');
    const numStringValue = this.textContent;
    for (let i = 0; i < Number(numStringValue) * 2; i++) {
    setTimeout(growSquare, i * 1000);
  }
};

function changeSquare() {
  const change = () => {
    for (let i = 0; i < mySquares.length; i++) {
      myFirstSquares[i].classList.add('hidden');
      mySecondSquares[i].classList.remove('hidden');
    }
  }
  setTimeout(change, this.textContent.length * 1000);
};

function changeSquareTwo() {
  const change = () => {
    for (let i = 0; i < mySquares.length; i++) {
      mySecondSquares[i].classList.add('hidden');
      myThirdSquares[i].classList.remove('hidden');
    }
  }
  setTimeout(change, this.textContent.length * 2000);
};

// Messages - Fortunes
const messageWrapper = document.getElementById('advice');

const messageItems = ['Work hard in silence, let you success be your noise.', 'Get wild!', 'Your comfort zone will kill you.', 'Remember your words can plant gardens or burn forests down.', 'Dont be a lady be a lengend', 'Stay close to people who feel like sunshine.', 'You do not grow when you are comfortable.', 'Dreaming, after all, is a form of planning.', 'Put yourself in the way of beauty.', 'Be a nice human.']

const messageSection = document.querySelector('section.hidden')

const getRandomMessage = function() {
  messageItems.sort(() => (0.5 - Math.random()));
  return messageItems[0];
};

function displayMessage() {
  messageWrapper.innerHTML = getRandomMessage()
  messageSection.classList.remove('hidden');
  messageSection.classList.add('message');
}

//Event Listener
for (let i = 0; i < mySquares.length; i++) {
  myFirstSquares[i].addEventListener('click', loopThrough);
  myFirstSquares[i].addEventListener('click', changeSquare)
  mySecondSquares[i].addEventListener('click', loopThroughNumber);
  mySecondSquares[i].addEventListener('click', changeSquareTwo);
  myThirdSquares[i].addEventListener('click', loopThroughNumber);
  myThirdSquares[i].addEventListener('click', displayMessage);
};
