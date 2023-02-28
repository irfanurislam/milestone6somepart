let a = 5;
let b= 7;
console.log(a,b);//5 7

b = 8;
console.log(a,b);//5 8

// object // array non premitive 

let p = {job: 'web devloper'};
let q = p;
console.log(p);
 //student = { job : 'backend devs'};

 q.job = 'fronted deves';
 console.log(q,p);