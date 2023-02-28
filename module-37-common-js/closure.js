// clousure then

function kichen(){
    let raost = 0;
    return function(){
        raost++;
        return raost;
    }
    
}
const first = kichen();
console.log(first());


// 
function ami(){
    let name ="pizza";
    function display(){
        console.log(name,'ami khabo')
    }
    display();
}
ami();