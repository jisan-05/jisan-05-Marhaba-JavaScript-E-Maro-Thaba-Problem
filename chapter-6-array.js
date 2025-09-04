// practise 
const number = [71,72,73,74,75,76,77]

const color = ["blue","black","red","Yellow"]
console.log(color.length)

// practice 
const friend = ["Rakib","Sakib","Asif","Jisan"]
console.log(friend[3])

const num = [1,2,3,4,5,6,7,8,9,10]
const update = num[7]=30
console.log(num)

const familyMember = ["Arif","Ali","Rakib","Sakil","Salam"]
const thirdPosition = familyMember[3]
console.log(thirdPosition)

const tableItem = ["Pen","Book","Pc","Mobile"]
console.log(tableItem[7])


// practice 
const arr = [10,20,30,40,50]
const add = arr.push(60)
console.log(arr)

const game = ["Free fire","Pubg","Call of Duty","Tample Run"]
const remove = game.pop()
console.log(game)

const numbers = [24,36,48,60]
numbers.unshift(12)
console.log(numbers)

const books = ["Javascript Book","Css Book","Web Dev Book"]
books.shift()
console.log(books)

// practice 
const food = ["Apple","Banana","Mango","Lichi"]
if(food.includes("Mango")){
    console.log("Mangoo Ache")
}else{
    console.log("Nai")
}

const names = ["Babul","Alif","Coton"]
console.log(names.indexOf("Babul"))


const city = ["Dhaka","Chittagong","Sylhet"]
const addedCity = city.push("rajshahi")
console.log(city.includes("Rajshahi"))

const games = ["Football","Cricket","Boliball"]
console.log(games.includes("batminton"))