const bottle = {color: 'water', price : 50, iscleaned: true, capacity: 1};

const keys = Object.keys(bottle);
console.log(keys);//[ 'color', 'price', 'iscleaned', 'capacity' ]

for(const key of keys){
    console.log(key,bottle[key]); // bottle er vitor key dile key value duitai dekhabee
}
/* color
price
iscleaned
capacity */

// ei loop tai amra korbo

for (const key in bottle){
    //console.log(key);
    console.log(bottle[key]);

}

// advance 

for( const [keys,value] of Object.entries(bottle)){
    console.log(keys,value);
}
//eivabe krte pra jai ek prokar distructure kora bole ...array er vitor keys value gula jkhn entrie kore tkhn bottle dhore call dei.


const myfriends ={
    name: 'shihab',
    age : '24',
    isStudent : true,
    grademarks : "well",
    live: 'raojan'
}
for(const [keys,value] of Object.entries(myfriends)){
    console.log(keys,value);
    /* name shihab
age 24
isStudent true
grademarks well
live raojan */
}