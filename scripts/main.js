let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/wesh.png') {
      myImage.setAttribute('src', 'images/cool.png');
    } else {
      myImage.setAttribute('src', 'images/wesh.png');
    }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please write your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Wesh is cool, ' + myName;
  }
  
  if (!localStorage.getItem('nom')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Mozilla est cool, ' + storedName;
  }

  myButton.addEventListener('click', function() {
    setUserName();
  });