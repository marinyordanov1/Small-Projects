let maximum = parseInt(prompt('Enter your maximum number!'));
while (!maximum) {
  maximum = parseInt(prompt('Enter a valid number!'));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = prompt('Enter your first guess!');
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === 'q') break;
  attempts++;
  if (guess > targetNum) {
    guess = prompt('Too high! Enter a new guess:');
  } else {
    guess = prompt('Too low! Enter a new guess:');
  }
}

if (guess === 'q') {
  console.log('Okay you Quit!');
} else {
  console.log(`You Got It! It Took You ${attempts} guesses`);
}
