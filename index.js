//// my java script notes 




//var myName = "Abhishek"
//console.log(myName);

//var myAge =  true + true; // in java script true = 1 false = 0  thats why we are getting op 2 here 
//console.log(myAge);

//* NaN means not a number example 

// NaN is a property of an global object  in other words  it is a variable in global scope
// the intial value is a NaN  not a number

// var myName = 'abhishek' - 'kannor' here i will get a NAN out put 
 
// var myNumber = 9108205812
// var myName  = "Abhishek"
// console.log(isNaN(myNumber));
// console.log(isNaN(myName));   isNaN is a global object 

// if(isNaN(myName)){
//     console.log("plz enter a valid phone  number");
// }


// console.log(NaN === NaN);
// console.log(Number.NaN === NaN);
// console.log(isNaN(NaN));
// console.log(isNaN(Number.NaN));

// expressions and operators 
//  


// var num =  15 
// var newNum = num++  ---->>>  postpix it will return before increment 
// console.log(num);
// console.log(newNum);

// ----- prefix increment ---------
// var num = 16
// var nums = ++num
// console.log(num);      as simmilar to decrement as well 
// console.log(nums);

// --- comparison opertor ------//
// A comparison operator compares its operands  and it will returns  logical true or false  

// equal operator  ==
// not equal !=
//  greater than >
// less than < 
// less than or equal <= 
// greater than or equal >=

// console.log(3**2);
// console.log(1234+"abhishek"); will get a concatination 

// var num1 = 12
// var num2 = 13
// num1 = num1 + num2
// num2 = num1 - num2 
// num1 = num1 - num2
// console.log(num1);
// console.log(num2);

// -----------------> Interview question ---------------------------->
// what is the diff b/w == and ===
// ans --- >  ==  will check the values of the operand where === check values with the data type


// Control statements in js
//  if else  if conditon true if will excute if fails to excute else will 



//  -----------------------------  example  ------------------------------------
// var tomr = "rain"
// if (tomr == 'rain') {
//     console.log('need to take a rain coat');
// }else {
//     console.log('no need to take rain coat')
// }

// -------------------------------- leap year -------------------------
// var num = 2022
// if(num % 400 === 0 || num % 4 === 0 || num % 100 === 0){
//     console.log("its a leap year");
// }else{
//     console.log("not a leap year");
// }

// ternary operator -----
// var age  = 17
// console.log(age >= 18 ? "u can vote" : "u can't vote");


// Switch Statement 

// var area = 'swl'
// var PI = 3.142; l = 10; b = 20 ; r = 3;
// switch(area){
//     case 'circle':
//         console.log(PI*r**2);
//         break;
//     case 'triangle':
//         console.log(.5 * b * l);
//         break;
//     case 'rectangle':
//         console.log(l*b);
//         break;
//     default:
//         console.log('plz enter valid number');
// }


// while loop  --- excutes till a conditon will true 

// var num = 1;
// while(num <= 10){
//     console.log(num);
//     num++;
// }


// do while loop -- first will prints the value after that it will  evaluvates the conditions here will get a one output 
// var num = 1 
// do{
//     console.log(num);
//     num++
// }while(num <= 10);

 // for loop -------- 
//  var num = 10
//  for(var i = 1 ; i <= num ; i++){
//     console.log(i);
//  }


// tables using for loop 

// var num = 12;
// for(var i = 1 ; i<=10; i++){
//     console.log(num,"X" , i , "=" , num * i)
// }


// --------------- Functions -------------
//  block of code  designed to perform a specific task called function 

// function addTwoNumbers(){
//     var a = 10
//     var b = 20
//     var sum = a + b 
//     console.log(sum)
// }
// addTwoNumbers();

// // function parameter vs function arguments 
// function parameter are the name listed in the functions defination 
// function arguuments are the real values passed to the function

// function add(a,b)---- paramters{
//     var total = a + b
//     console.log(total);
// }
// add()
// add(10,20) --- arguments 
// add(20,20)

// why functions -------
        //   define function once and you can re use how many times we want we can use the same function with diffrent arguments 


// function expression 
// // create a funnction put into in a variable 
// var abhi  = function (a,b){
//     return total = a + b
// }                     -------------------------> function expression 
// var funExp = abhi(4,5);
// console.log(funExp);

// function sum(a,b){
//         return a+b
// }
// console.log(sum(10,12))

                                                        // Arrays 

// let myFriends = ["abhi","kannor","basava","Rakshith"]
// for(let i= 0; i<myFriends.length;i++){
//         console.log(myFriends[i]);
// }

// for in loop ----- provides the indexs of the array
// let myFriends = ["abhi","kannor","basava","Rakshith"]
// for(let abhi in myFriends){
//         console.log(abhi);

      // for of loop provides the elements of the array
// let myFriends = ["abhi","kannor","basava","Rakshith"]
// for(let raj of myFriends){
//         console.log(raj);
// }
// sorting using for each lopp
// let num = [1,4,6,7,8,2]
// let nums = []
// num.forEach(function(element,index,array)
// {
//         num.sort()
//         nums.unshift(element)
// })
// console.log(nums);

// unshift and push both use cases are same adding elements to the array but one more diffrence push adds elements end of the array
// when it comes to an unshift this is also add the elements but beginning of the array only diffrence






















