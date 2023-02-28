//create object using objet literals
// ek line ea korte hobe jodi number na hoi eita follow korte parbo
const player = {};
player.name = "shihab";
player.speacial = 'comdey';
player.bat = function () {
    console.log('right handed bats');
}
console.log(player);
player.bat();



// step 2

const studen = {
    name: 'andey',
    job: 'khai andey',
    ball: function () {
        console.log('left arm ball');
    },
    salary: 100
}
console.log(studen);



// object constructror
const person = new Object();
console.log(person); // new chara call korle hoi;
const manush = Object();
console.log(manush);

// 3 method create object

const item = Object.create(null);
console.log(item);//[Object: null prototype] {}

const item1 = Object.create(studen);
console.log(item1);//{}
// but jodi item1.name dile pabe
console.log(item1.name);// andey ( dekhabe) chain hishbee dekhacce eknprokaer
console.log(item1.bat);//undefined dekhabe jehetu student er vitor bat namer kono propersty nai

// class propertuy

class vasha {
    name= 'bangla'; 
    birth = '1952';
    constructor(age){
        this.vasharboyosh = age;
    }
}
const dekhao = new vasha('70 year');
console.log(dekhao);

// old function ojbect

function Car(model,price){
    this.model = model;
    this.price = price;
}
const tesla = new Car('bmw',130000);
console.log(tesla);