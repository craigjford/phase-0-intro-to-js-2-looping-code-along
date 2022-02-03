// Code your solutions in this file
/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old.  Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
     }
     return gifts;
}

wrapGifts(gifts);

const names = ["Guadalupe", "Ollie", "Aki"];
//const names = ["Charlie", "Samip", "Ali"];

let messageArray = [];
let answerArray = [];

function writeCards(array, event) {
    for (let i = 0; i < names.length; i++) {
         messageArray[i] = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
    }
    return messageArray;
}

answerArray = writeCards(names, "birthday");

for (i = 0; i < answerArray.length; i++) {
    console.log(`${answerArray[i]}`);
}

function wrapMoreGifts(gifts) {
    let i  = 0;
    while (i < gifts.length) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        i++;
    }
}
wrapMoreGifts(gifts);

function countDown(number) {
    let i = number;
    while (i >= 0) {
        console.log(`${i}`);
        i = i - 1;
    }
}

let passNum = 10;
countDown(passNum);

*/

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gift) {
    for (let i = 0; i < gift.length; i++) {
        console.log(`Wrapped ${gift[i]} and added a bow!`);      
    }
    return gift;
}  

wrapGifts(gifts);

const names = ["Guadalupe", "Ollie", "Aki"];
let messageArray = [];
let answerArray = [];

function writeCards(array, occasion) {
    for (let i = 0; i < names.length; i++) {
         messageArray[i] = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
    }
    return messageArray;
}

answerArray = writeCards(names, "birthday");

for (i = 0; i < answerArray.length; i++) {
    console.log(`${answerArray[i]}`);
}

function wrapMoreGifts(gifts) {
    let i  = 0;
    while (i < gifts.length) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        i++;
    }
}

wrapMoreGifts(gifts);

function countDown(number) {
    let i = number;
    while (i >= 0) {
        console.log(i);
        i = i - 1;
    }
}

let passNum = 10;
countDown(passNum);
passNum = passNum;
countDown(passNum);

 


