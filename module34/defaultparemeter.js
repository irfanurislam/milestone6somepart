function add(n1,n2){
   const total = n1 + n2;
return total;

}
const result1 = add(10,10);
console.log(result1);




function add(n1,n2){
    if(n2 === undefined ){
        n2 = 0;  
    }
   const total = n1 + n2;
   return total;
}
const result = add(10); //paremeter 1 pataile Nan dekhaibe tai caile condition dite parbo
console.log(result);


// third items check default hishebeb dekhaiboo


function add1(n1, n3 =0){
   // n3 = 0 hishbebe declare koraite she ar nan dekhabena
    const sum = n1 + n3;
    return sum;
}
const all = add1(10);
console.log(all);

