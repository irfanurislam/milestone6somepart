//function declaretion


function now(n1 , n2){
    const total = n1 + n2;
    return total;
}
const final = now(10,10);
console.log(final);

//function expression
const add1 = function now1(n1 , n2){
    const total = n1 + n2;
    return total;
}



//nicher function ta short functin hishebe use koa jabe;

// arrow function use this
const add4 = (n1,n2) => n1 + n2;
//(n1 +n2) paremeter hishebe count kortece 
//n1 + n2 return hishebeb niche arrow function eea

const result = add4(10,10);
console.log(result);
