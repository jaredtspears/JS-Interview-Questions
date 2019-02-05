
//Q1: ===========================================================================
// how do you add something at the beginning and at the end of an array?
// function q1() {
//   var myArray = [ 'a', 'b', 'c', 'd'];

//   // regular JS way:
//     // myArray.unshift('beginning');
//     // myArray.push('end');
//     // console.log(myArray);

//   //es6 way: (spread operator)
//   myArray = ['start', ...myArray];
//   myArray = [...myArray, 'end'];
//   console.log(myArray);

//   // another es6 way:
//   myArray = ['start2', ...myArray, 'end2']
//   console.log( myArray);
// }

// q1();

//Q2 =============================================================================
// how do you create a private variable in js:

// function private(){
//   var privateText= 'something private';

//   // create a scoped function within a function to hide data
//   return function(privateText) {
//     return privateText;
//   }
// }

// var getPrivateVariable = private();
// console.log(getPrivateVariable()); // undefined
// console.log(private());            // f(privateText){return privateText;} no text will display

//Q3 ===============================================================================================
// What is the output?

// var num = 4;            //a distractor var
// function outer(){
//   var num = 2;          //a distractor var that replaces 4 
//   function inner(){
//     num++;              // num = 2 is outside inner() scope so it will be UNDEFINED           
//     var num = 3;        //this resets num to 3
//     console.log(num);   //which we now return the 3 
//   }
//   inner()               //this is called then the outer() is called which is just calling the inner() that only clg(3);
// }
// outer(); 
//3 is the output it has to do with closures

//Q4 ===================================================================================================
//what is the output? 

// console.log(typeof typeof 1); //it will returns 'string'... because typeof 1 is number and typeof number will give string...
// console.log(typeof (typeof 1));


//Q5 ========================================================================================================
// what is the output?

// var hero ={
//   _name: 'john doe',
//   getSecretID: function (){
//     return this._name;
//   }
//   }

//  var stolenSecretID = hero.getSecretID;       //UNDEFINED unless you do this: var stolenSecretID = hero.getSecretID.bind(hero); to have ln 75 work

//  console.log(stolenSecretID());               //UNDEFINED = because it is not a function and thus is not defined
//  console.log(hero.getSecretID());             //john doe