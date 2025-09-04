const numbers = [12, 98, 45, 63, 21, 72];
for (const num of numbers) {
  console.log(num);
}

// practice -- for of loop
const favSubject = ["Bangla", "English", "Math"];
for (const item of favSubject) {
  console.log(item);
}

// practice - while loop
let num = 0;
while (num < 10) {
  console.log("I will study javascript daily minimum 1 hours", num);
  num = num + 1;
}

let number = 1;
while (number <= 20) {
  console.log(number);
  number += 1;
}

let namta = 1;
while (namta <= 10) {
  console.log(`3 * ${namta}`, "=", namta * 3);
  namta += 1;
}

// practice - while loop
let num2 = 5;
let sum = 0;
while (num2 <= 15) {
  sum = sum + num2;
  num2++;
}

console.log(sum);

// practice  - for loop
for (let i = 150; i <= 170; i++) {
  console.log(i);
}

let sum2 = 0;
for (let i = 25; i <= 75; i++) {
  sum2 = sum2 + i;
}
console.log(sum2);

// practice -- even,odd,sum, -- loop
for (let i = 20; i <= 50; i++) {
  if (i % 7 == 0) {
    console.log("Bibazzo", i);
  }
}


for (let i = 40; i <= 80; i++) {
  if (i % 5 == 0 && i % 7 == 0) {
    console.log("5 & 7 diye Bibazzo", i);
  }
}


let sum13 = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 13 == 0 ) {
    console.log("13 diye Bibazzo", i);
    sum13 = sum13 + i
  }
}
console.log(sum13)



// practice - break % continue in Loop

for(let i = 1 ; i <=50 ; i++){
    console.log(i)
    if(i >= 15){
        break;
    }
}


for(let i = 1; i <=40; i++){
    if(i % 7 == 0){
        continue;
    }
    console.log(i)
}

for(let i = 91; i <=120; i++){
    if(i % 10 == 0){
        break;
    }
    console.log(i)
}

