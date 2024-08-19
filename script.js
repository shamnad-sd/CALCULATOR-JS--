
let firstnumber
let step = 0
let secondnumber
let operation
let result = 0

let numArray = []
let secondnumArray = []

let display =document.getElementById('display')

function getNumber(num){
    if(step === 0 || step === 1){
        numArray.push(num)
        step =1
        firstnumber =Number(numArray.join('')) //merge into one string, then into number
        display.value = firstnumber
    }else if(step === 2){
        secondnumArray.push(num)
        secondnumber = Number(secondnumArray.join(''))
        display.value = secondnumber
    }
}

function getOperator(op){
    step =2
    operation = op


}

function clearDisplay(){
    display.value = 0
    firstnumber = null
    secondnumber = null
    step = 0
    operation = null
    result = 0
    numArray = []
    secondnumArray = []


}

const claculate = () => {
    if(operation === '+'){
        result = firstnumber + secondnumber
        display.value = result
    }else if(operation === '-'){
        result = firstnumber - secondnumber
        display.value = result
    }else if(operation === '*'){
        result = firstnumber * secondnumber
        display.value = result
    }else if(operation === '/'){
        result = firstnumber / secondnumber
        display.value = result
    }
    
}