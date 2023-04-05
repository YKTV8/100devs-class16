// *Variables*
// Create a variable and console log the value
let bringIt = 'Compton Clovers'
console.log(bringIt)

// Create a variable, add 10 to it, and alert the value
let num = 50
let sum = 50 + 10
alert(sum)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
let num1 = 14
let difference = num1 - 4
alert(difference)
// Create a function that divides one number by another and returns the remainder
let num2 = 21
let num3 = 8
function getTheRemainder(num2, num3){
    return num2 % num3

}
console.log(getTheRemainder(num2,num3))



// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
let num5 = 25
let num4 = 50

let sums = num5 + num4

if (num5 + num4> 50) {
    alert('jumanji')
    
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
let n1 = 3
let n2 = 3
let n3 = 3

function timesByThree(n1,n2,n3){
    return n1*n2*n3
}
if (n1*n2*n3/3) {
    alert('Zebra')
        
}
console.log(timesByThree(n1,n2,n3))

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function ryah(word,num){
    for (let i = 1; i <= num; i++) {
        console.log(word)
    }
}
ryah('ryah', 21)