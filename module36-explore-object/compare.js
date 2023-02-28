/* const first = {a:2};
const second = {a:2};
const third = second
if(third === second){
    console.log('same');//same
}else{
    console.log('diferent');//diferent
}
 */

//do not use method should bangal system
/*const first = {b:2,a:2, c:3};
const second = {a:2,b:2, c:3};
 const firststring = JSON.stringify(first);
const secondstrings = JSON.stringify(second); */
/* 
if(firststring === secondstrings){
    console.log('same'); // same dekhabe jodi a,bc mal soman rekhe order change kore di taile a,b,d different dekhabe
}else{
    console.log('different');
} */

// thirdmethdo
const first = {b:2,a:2, d:3};
const second = {a:2,b:2, c:3};
function compare(first,second){
    const firskeys = Object.keys(first);
    const secondkeys = Object.keys(second);
    if(firskeys.length === secondkeys.length){
        for(const key of firskeys){
            if(first[key] !== second[key]){
                return false;
            }
        }
        return true;
    }
}
const istrue = compare(first,second);
console.log(istrue);