console.log('hlw');


 const loadfile = async () =>{
    const url = '';
     try {    
    const res = await fetch(url);
     const data = await res.json();
     console.log(data);
    }
     catch(error){
        console.log(error);
     }

    
    
}
loadfile();
console.log('hlw');
