

let leo = 'Leo' //what datatype is this? (string)
let age = 26 //what datatype is this? (number)
let isTight = true //what datatype is this? (boolean)
const array = [1, 'hello', {name: 'John'}, true] //what datatype is this? (array)
const object = {
    class: 'sfwrdev',
    company: 'amazong'
} //what datatype is this? (object)
add = (num1,num2) =>{
    return num1 + num2
}//what is this? (function)

multiply = (num1,num2) =>{
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 * num2
    } else {
        throw Error('one or both inputs are NOT numbers')
    }
}

module.exports = {
    leo,
    age,
    isTight,
    array,
    object,
    add,
    multiply
}