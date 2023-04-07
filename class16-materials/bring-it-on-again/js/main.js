// *Variables*
// Declare a variable, assign it a value, and alert the value
let bringItAgain = 100
alert(bringItAgain)
// Create a variable, divide it by 10, and console log the value
let juice = 420

difference = juice/10

console.log(difference)
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function byThree(num1,num2,num3){
    product = num1*num2*num3
}
byThree(2,2,2)

alert(product)

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function addTwo(num1,num2,num3,num4){
    sum = num1+num2
    difference = num3-num4

    sums= sum-difference
}
addTwo(500,15,200,15)
console.log(sums)
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function itTakesThree(num1,num2,num3){
    sum= (100 + num1 - num2) / num3
    if (sum > 25) {
        console.log('We Have a Winna!!!!!!')
    }else{
        console.log('La Who, Zer')
    }
}
itTakesThree(1,101,2)
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function daysOfTheWeek(day){
    const days = ['Monday','Tuesday', 'Wednesday', 'Thursday','Friday','Saturday','Sunday']
    if(!days.includes(day.toLowerCase())){
        alert('try again Ho')
    }else if (day.toLowerCase() === "saturday" || day.toLowerCase() === "Sunday") {
        console.log('weekend')
    }else{
        console.log('week day')
    }
}
daysOfTheWeek('Monday','Tuesday', 'Wednesday', 'Thursday','Friday','Saturday','Sunday')
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function iphone(generation){
    for (let i = 1; i < 34; i++) {
        console.log(generation)
        
    }
}
iphone('gen')