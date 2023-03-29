//--- Easy
//create a variable and assign it a number
let favNum = 21

//minus 10 from that number
favNum = favNum - 10
//print that number to the console
console.log(favNum)
//--- Medium
//create a variable that holds a value from the input
// let inputedVal = document.querySelector('#danceDanceRevolution').value;
// let inputedVal = ""
//add 25 to that number
// inputedVal = "" + 25

// alert(inputedVal)
//alert that number

//--- Hard
//create a variable that holds the h1
const  h1Holder = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
h1Holder.addEventListener('click', sum)

function sum(){
    let inputedVal = document.querySelector('#danceDanceRevolution').value;
    console.log( favNum + Number(inputedVal))
}
