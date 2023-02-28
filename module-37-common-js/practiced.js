/* If I write []==true,will it show true or false? Check it out.

2) Use === to check if the true === "true" gives true or false.

3) Write an arrow function that will take a parameter and will check if the
parameter is a number or not by using isNaN(). And return true or false. */

const a = [] ;
if( a == true ){
    console.log('true');
}
else{
    console.log('false')
}

// 2
const aa = true;
const bb = 'true';
if(aa == bb){
    console.log('true');
}
else{
    console.log('false')
}
// ////////////////

// 3

const one = n => {

    if(typeof n === 'number'){
        return 'its a number';
    }
    else{
        return 'false hain';
    }
}

const res = one(2);
console.log(res);


function aaa(c){
    if ( typeof c === 'number'){
        return 'trueyyyyyyyyy'
    }else{
        return 'falseuyyyyy';
    }
}
const d = aaa(2);
console.log(d);


// 
let storeFalsyValue = true;
if(!storeFalsyValue) {
console.log(`Nothing to show!`);
}
else {
console.log(`You are amazing!`);
}

 /* Write an arrow function that will take 3 parameters (first two parameters will be numbers and the third
parameter will be a string) that will perform arithmetic operation depending on the third parameter and
will print the result. For example:
1. Print result of num1+num2 if operation is “add”
2. Print result of num1-num2 if operation is “subtract”
3. Print result of num1*num2 if operation is “multiply”
4. Print result of num1/num2 if operation is “divide”
5. Print result of num1%num2 if operation is “modulus”
6. Else print “Invalid operation” */

const paremeter3 = (a,b,third) => {
    if( third === 'add' ){
        const add = a + b;
        return add
    }else if(third === 'subtract'){
        const sub = a - b;
        return sub
    }
    else if(third === 'multify'){
        const mul = a * b;
        return mul;
    }
    else if(third === 'divide'){
        const div = a / b;
        return div;
    }
    else if(third === 'modulus'){
        const modul = a % b;
        return modul;
    }
    else{
        return 'invalid parametr';
    }
}
const total = paremeter3(20,10,'divided');
console.log(total);