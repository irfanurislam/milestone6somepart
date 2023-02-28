
const loadphone = async(value,dataLimit) =>{
   const url = `https://openapi.programming-hero.com/api/phones?search=${value}`;
   const res = await fetch(url);
   const data = await res.json();
   displayphone(data.data,dataLimit);
}
const displayphone = (phones,dataLimit) =>{
    //console.log(phones)
    const container = document.getElementById('phone-container');
    container.textContent = "";
   
const showdata = document.getElementById('showdata');
    if( dataLimit && phones.length > 10 ){
    phones = phones.slice(0,5);
    showdata.classList.remove('d-none')
    }
    else{
        showdata.classList.add('d-none');

    }
    const nofound = document.getElementById('nofound_mssg');
    if(phones.length === 0){
        nofound.classList.remove('d-none')
    } 
    else{
        nofound.classList.add('d-none');
    }

    phones.forEach(phone =>{
       console.log(phone.image);
        const {slug,image,brand,phone_name} = phone;
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =`
        
        <div class="card p-5">
                    <img src="${image}" class="img-fluid card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${brand}</h5>
                      <h5 class="card-title">${phone_name}</h5>
                     <p class="card-text">${slug}</p>
                     <a href="#" onclick="loadid('${slug}')" class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#phonedetails">Go somewhere</a>
                    </div>
                  </div>
        
        
        
        
        `
     container.appendChild(div);

    })
    //stop spin
   tooglespin(false);
}

const processfunction = (dataLimit) =>{
    tooglespin(true);
    const searchfeild = document.getElementById('search_feild');
    const searchtext = searchfeild.value;
    loadphone(searchtext,dataLimit);
}


document.getElementById('search_btn').addEventListener('click',function(){
    processfunction(10);

});
document.getElementById('search_feild').addEventListener('keypress', function (e) {
    //console.log(e)
      if (e.key === 'Enter') {
        processfunction(10);
      }
  });





// spinner function
const tooglespin = (isloading) =>{
    const loadersection = document.getElementById('loaderspin');
    if(isloading){
        loadersection.classList.remove('d-none');
    }else{
        loadersection.classList.add('d-none');
    }
}

// not for the best
document.getElementById('show_all').addEventListener('click',function(){

    processfunction();


})

const loadid = async(id) =>{
   const url = `https://openapi.programming-hero.com/api/phone/${id}`;
   const res = await fetch(url);
   const data = await res.json();
   phonedisplay(data.data);

}
const phonedisplay = (phone) =>{
     console.log(phone);
     const phonedetails = document.getElementById('phonedetailsLabel');
     phonedetails.innerText = phone.name;
     const injectphone = document.getElementById('phone_details');
     injectphone.innerHTML = `
     <p>Release date: ${phone.releaseDate ? phone.releaseDate : "no release date"}</p>
     <p class="text-danger">others:${phone.others ? phone.others.Bluetooth : "no bluthoth"} </p>
     <p class="text-success">storage:${phone.mainFeatures ? phone.mainFeatures.storage : "no storage"} </p>
     <p class="text-warning">nfc:${phone.others ? phone.others.NFC : "no nfc"} </p>
     
     
     
     `;


}

loadphone('samsung');