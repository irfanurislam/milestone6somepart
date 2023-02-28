const person = {
  found: 2,
  message: "Found 2 persons",
  result: [
    {
      name: {
        common: "John",
        fullName: ["John", "Doe"]
      },
      age: 32,
      isMale: false,
      address: {
        street: "13/A St Joseph",
        house: 10,
      },
    },
    {
      name: {
        common: "Humayoun",
        fullName: ["Humayoun", "Kabir"]
      },
      age: 33,
      isMale: false,
      address: {
        street: "13/A St Lucia",
        house: 11,
      },
    },
  ]
};
console.log(person);

const personcontain = document.getElementById('person-contain');
const element = person.result;
console.log(element);
element.forEach(pers => {
 //console.log(pers.name);
  const div = document.createElement('div');
  div.classList.add('col-md-6');
  div.innerHTML = `
  <div class="card">
        <div class="card-header">
                <h3> Person name:  ${pers.name.common}</h3>
          </div>
            <div class="card-body shadow-lg">
                <blockquote class="blockquote mb-0">
                  <p> Age :${pers.age}</p>
                  <p> Street :${pers.address.street}</p>
                  <p> House No  :${pers.address.house}</p>
                  
                </blockquote>
          </div>
    </div>  
  
  `
personcontain.appendChild(div);

})


/* const loaduser = async () =>{
  const url = `https://server.com/data.json`;
  try{
   const res = await fetch(url);
   const data = await res.json();
   console.log(data);

  }catch(error){
    console.log(error);
  } 




};
 */


