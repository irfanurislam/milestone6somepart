console.log('hlw');


 const loadfile = async () =>{
    //const url = 'json/data.json';
     try {    
    const res = await fetch('./js/json/data.json');
     const data = await res.json();
     console.log(data);
    }
     catch(error){
        console.log(error);
     }

      
}
loadfile();
console.log('hlw');
