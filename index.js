// Code your solutions in this file

for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
}

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}

function printBadges(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
  }
  return names;
}

function maybeTrue() {
  return Math.random() >= 0.5
}
function tailsNeverFails() {
  tails = 0
  while (maybeTrue()) {
    tails += 1
  }
  return `You got ${tails} tails in a row!`;
}
