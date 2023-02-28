console.log('this', this);


const kodomali ={
    name: 'kodom lai',
    money: 3000,
    study: 'math',
    subject : ['algebra','calculas','linear'],
    exam : function(){
        return this.name + " improvments participants in examss";
    },
    examthis: function(){
         console.log(this);
    },
    examnested: () =>{
        const arrow =()=>{
            console.log(this);
        }
        arrow();
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

kodomali.exam();


function thisfunction(){
    console.log('functoion',this);
}
document.getElementById('clicbtn').addEventListener('click',function(){
    console.log(this);
})