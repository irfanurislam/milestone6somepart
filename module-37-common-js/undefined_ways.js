// 8 wways to  get undefined
/* 
1. variable that is not initieazied will give undefined;
2. function no return
3. paremter that is not  passed will be undefined
4. return dont mention
5. object defined dont have in this object
6. array index no have but defined  
7. delete litems


*/
//1
let first ;
console.log(first);//undefined
//2
function second(a,b){
 const total = a +b;
}
const rsult = second();
console.log(rsult);//undefined

//3
function third(a,b,c,d){
 console.log(a,b,c,d);
}
third(2,5);//2 5 undefined undefined


//4 
function nonegaaaative(a,b){
    if( a < 0 || b < 0){
        return
    }
    return a + b;
}
const total = nonegaaaative(2,-3);
console.log(total);//undefined

//5

const fifth = { id: 2, name: 'ponchom',age:40};
console.log(fifth.age, fifth.salaray);//40 undefined

// 6
const sixth = [12,23,34,455,55];
// kkhno kora ucit na tai splice use korbo //7
 //delete sixth[1];//[ 12, <1 empty item>, 34, 455, 55 ]
console.log( sixth[3],sixth[7]);//undefined
console.log(sixth);

//8
 const eight = undefined;
 const ninth = null;
 const data = { resuult:[], update: null};
 console.log(typeof undefined);//undefined
 console.log(typeof null);// object



