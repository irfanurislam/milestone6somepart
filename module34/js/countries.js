console.log('hlw problem');

const loadcontries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => display(data))
}

const display = (country) => {
    const divcontain = document.getElementById('div-contain');
   
   /*  for(const count of country){
        console.log(count);
    } */
    country.forEach(alldesh =>{
        //console.log(alldesh.cca2);
        const divall = document.createElement('div');
        divall.classList.add('country');
        divall.innerHTML = `
        <h3>Name: ${alldesh.name.common} </h3>
        <p> Capital: ${alldesh.capital ? alldesh.capital[0] : 'no capital' }</p>
        <button onclick=" loadshortname('${alldesh.cca2}')" > details :</button>
        
        `
        divcontain.appendChild(divall);
    })
}

const loadshortname = code =>{
    const url =`https://restcountries.com/v3.1/alpha/${code}`
    //console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => showdata(data[0]));
}

const showdata = details =>{
    const detialsconta = document.getElementById('details');
    console.log(details);
    detialsconta.innerHTML = `
    <h3>Name: ${details.name.common} </h3>
    <img src = ${details.flags.png}>
    
    `
}

//<img src = ${}>




loadcontries();