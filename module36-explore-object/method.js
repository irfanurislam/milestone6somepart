// melthod niiye alocona korbo

const student ={
    name: 'kodom lai',
    money: 3000,
    study: 'math',
    subject : ['algebra','calculas','linear'],
    exam : function(){
        return this.name + " improvments participants in examss";
    },
    improveExam: function(subject){
             this.exam();
             return `${this.name} is a taking improvments exam ${subject}`;
    },
    treatdey: function(amount,tips){
          this.money = this.money - amount - tips;
          return this.money;
    },
};




console.log(student.exam());
const subje = student.improveExam('linear');
console.log(subje);

// treat
const remaiing = student.treatdey(1000,100);
console.log(remaiing);

// second method my own
/* 
const varsity = {
    department : 'cse',
    totalcredit : 140,
    semester : 7,
    creditfee: 1900,
    totalcost : function(amount){
            return  this.totalcredit * amount;
       
    },
    semester1 : function(amount){
        this.totalcost = this.totalcost - amount;
        return this.totalcost;
    },

}

const ache = varsity.semester1(35000);
console.log(ache);
console.log(varsity.totalcost(7)); */