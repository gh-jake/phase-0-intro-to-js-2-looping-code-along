// Code your solutions in this file
/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
} 


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts); 
*/

function writeCards(names, eventName) {
  let endArray = [];
    
  for (let i = 0; i < names.length; i++) {
      endArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }

  return endArray;
}

function countDown(num) {
  let i = num;
  while (i >= 0) {
    console.log(i);
    i--;
  }
}