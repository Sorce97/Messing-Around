

let score = document.getElementById(0)

const maxWidth = window.innerWidth-200;
const maxHeight = window.innerHeight-30;
const buttonNames = [
  'I SAID DONT DO IT!',
  'You Missed :)',
  'Ow That Hurt',
  'Oof Youre Trash',
  'Give Up',
  'That one stung',
  'Try and make me blue',
  'when will you stop',
  'Stop you are getting me angry',
]

function displayIsaidno(button)   {
  button.value=buttonNames[Math.floor((Math.random()) * buttonNames.length)];
  button.style.top=Math.floor((Math.random() * maxHeight) + 1)+'px';
  button.style.left=Math.floor((Math.random() * maxWidth) + 1)+'px';
}

function scorecard()  {
  "score" + 1
}
