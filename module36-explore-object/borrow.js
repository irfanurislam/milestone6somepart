const kodomali ={
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

const result = kodomali.exam();

const badamali ={
    name: 'kacha badam',
    money: 8000,
}
const result2 = kodomali.exam.call(badamali);
console.log(result2);

const remaining = kodomali.treatdey.call(badamali,4000,400);
console.log(remaining);

const money2 = kodomali.treatdey.apply(badamali,[1000,100]);
console.log(money2);

const badamtreat = kodomali.treatdey.bind(badamali);
const remain = badamtreat(1000,100);
console.log(remain);

