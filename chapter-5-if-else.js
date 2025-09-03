// practice
const nastaTime = 6;
const amiBasaiFirsi = 10;
if (nastaTime > amiBasaiFirsi) {
  console.log("Nasta Pabo");
} else {
  console.log("Nasta Pabo Na");
}

// practice
const age = 20;
const height = 65;
if (age > 18 && height > 60) {
  console.log("Gari Thelbi");
} else {
  console.log("Bose Thakbi");
}

// Practice 
const shoping = 3200;
if(shoping > 6000){
    const discount = (shoping / 100 ) * 15;
    const price = shoping - discount;
    console.log("Discounted Price 15% : ",price)
}else if(shoping > 3000){
    const discount = (shoping / 100) * 5;
    const price = shoping - discount;
    console.log("5% discount ", price)
}else{
    console.log("Price Fixed ",shoping)
}

// practice 
const isDawatDise = false;
const pocketMoney = 10000;
if(isDawatDise){
    if(pocketMoney > 1000){
        console.log("I will buy a Gift for my Friend")
    }else{
        console.log("No Gift")
    }
}else{
    console.log("Unfriend from List")
}

// practise - ternary operator
const shopingKorse = 1000;
shopingKorse > 3000 ? console.log("CashBack 500") : console.log("No CashBack")

const Expensive = false;
if(Expensive === false){
    console.log("I will buy this item")
}