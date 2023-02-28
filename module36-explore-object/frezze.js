const bottle = {color: 'water', price : 50, iscleaned: true, capacity: 1}
const keys = Object.keys(bottle);//[ 'color', 'price', 'iscleaned', 'capacity' ]
console.log(keys);

const values = Object.values(bottle);
console.log(values);//[ 'water', 50, true, 1 ]

//ami chaije keys value eksathe dekhate

const entris = Object.entries(bottle);
console.log(entris); 
// ekta two dicemnsion array dicee
/* [
  [ 'color', 'water' ],
  [ 'price', 50 ],
  [ 'iscleaned', true ],
  [ 'capacity', 1 ]
] */

console.log(bottle);
//kintu ekhn sealed korle delete hobena kintu modify hobe
Object.seal(bottle); //{ color: 'gray', price: 30, iscleaned: true, capacity: 1 }

// freze korle ar modify ar delete kora jabena
Object.freeze(bottle);//{ color: 'water', price: 50, iscleaned: true, capacity: 1 }
delete bottle.iscleaned; //{ color: 'gray', price: 30, capacity: 1 }
bottle.color = "gray"; //{ color: 'gray', price: 50, iscleaned: true, capacity: 1 }
bottle.price = 30;
console.log(bottle);