function sum( a,b,c){
    console.log(typeof arguments)
    //const args = [...arguments];
    //console.log(args);
    const result = a+b+c;
    return result;
}
const total = sum(45,23,3,45,46,67,87,55);
console.log(total);
console.log(sum.length);// parameter koita dekhai jacce


let n = 4
let n2 = 4;
function mul(a,b){
     a = 10
 const result = a * b;
 return result;
}
const output = mul(n,n2);
console.log(output);


let student1 = {name: 'jalil', partner: 'borsha'};
let student2 = {name: 'raj' , partner: 'anika'};
function makemovie(c1,c2){
    c1.name = 'onoto';
}
console.log(student1);
makemovie(student1,student2);
console.log(student1);