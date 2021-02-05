const chai = require('chai')
const assert = require('chai').assert
const expect = require('chai').expect

// cool import - destructuring
const { leo, age, isTight, array, object, add, multiply } = require('../index')

//describe what test does
describe('testing leo variable', function(){ //cannot use arrow functions for testing environments
    it('should return string as type', function(){ //checking datatype
        //typeOf will return which datatype
        assert.typeOf(leo, 'string');
    })
    it('should return Leo as a result', function() { //checking value
        //check to see what Leo is equal to
        assert.equal(leo, 'Leo')
    })
    it('should return length 4', function() { //checking length
        //to find length
        assert.lengthOf(leo, '3')
    })
})

describe('testing age variable', function(){
    it('should return number', function(){ //checking datatype
        assert.typeOf(age, 'number')
    })
    it('should return 26', function(){ //checking value
        assert.equal(age, '26')
    })
})

describe('testing isTight variable', function(){ 
it('should return boolean', function(){ //checking datatype
        assert.typeOf(isTight, 'boolean')
    })
    it('should return true', function(){ //checking value
        assert.equal(isTight, true)
    })
})

describe('testing array variable', function(){ 
    it('should return array', function(){ //checking datatype
        assert.typeOf(array, 'array')
    })
    it('should return length 4', function(){ //checking value
        assert.lengthOf(array, '4')
    })
    it('should be have four different datatypes', function(){ //we iterate through the array and utilize switch to check typeof
        let result = 0;
        for(let i = 0;i < array.length; i++){
            let element = array[i]
            switch (result += 1) {
                case typeof element === 'boolean':
                    break;
                case typeof element === 'string':
                    break;
                case typeof element === 'object':
                    break;
                case typeof element === 'number':
                    break;
            }
        }
        assert.equal(result, 4) //using result variable, ensure we've isolated each datatype
    })
})

describe('testing object', function(){
    it('should be an object', function(){ //checking datatype
        assert.typeOf(object, 'object')
    })
    it('should equal sfwrdev', function(){ //checking value
        assert.equal(object.class, 'sfwrdev')
    })
})

describe('testing function', function(){
    it('should be a function', function(){ //checking dataype
        assert.typeOf(add, 'function') //assert syntax
        expect(add).to.be.a('function') //expect synax
    })
    it('should equal return 4', function(){ //checking output
        assert.equal(add(2,2), 4)
    })
    it('should return a number', function(){ //checking output datatype
        assert.typeOf(add(2,2), 'number')
    })
})

//how do i know what to test?
//what am i loking for when testing?
//test the database, test the equality, testing lengths, testing properties {key: value} inside of an object.

//starting TDDs (test driven development)

//writing a function to return a number thats multiplied
//write the test


//go to file where we want the function


//write code in a way that passes test


//export function


//import function into test module(file)


//run test


describe('multiply function', function(){
    it('should return function', function(){
        assert.typeOf(multiply, 'function')
    })
    it('should return sum', function(){
        assert.equal(multiply(3,3), '9')
        assert.equal(multiply(3,'j'), '3j') //forcing error to ensure edge case erroring correctly
        // expect(multiply(2,2).to.equal('4'))
    })
    it('should output datatype as number', function(){
        assert(multiply(1,1), 'number')
    })
})