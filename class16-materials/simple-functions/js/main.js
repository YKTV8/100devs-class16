//---Easy
//create a function that subtracts two numbers and alerts the difference
let myNum = 18
let newNum = 8

let difference = myNum - newNum

function answer(difference){
    alert(difference)
}
console.log(difference)
//create a function that divides three numbers and console logs the quotient
let numOne = 50
let numTwo = 10
let NumThree = 2

let remainer = numOne/numTwo
let quotient = remainer/NumThree

function answer(quotient){
    alert(quotient)
}
console.log(quotient)

//create a function that multiplys three numbers and returns the product
let numFour = 2
let numFive = 5
let numSix = 4

let product = numSix * numFour * numFive

function answer(product){
    alert(product)
}
console.log(product)

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return 
//the remainder of dividing the sum of the first two numbers by the third number
function addTwoAndDivide(n1,n2,n3){
    return (n1 + n2) % n3
}

console.log(addTwoAndDivide(3,3,4))

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number