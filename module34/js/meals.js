console.log('meals');

const loadmeals = (searchtext) => {
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s= ${searchtext}`;
    //console.log(url);
    fetch(url)
    .then(res =>res.json())
    .then(data => showmeals(data.meals));
}

const showmeals = meals =>{
  const divcontain= document.getElementById('div-container');
  divcontain.innerHTML = '';
  meals.forEach(meal =>{
    console.log(meal);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    
    <div class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
         <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button onclick="loadmodal2(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealsdetails">
         meals details
        </button>
        </div>
    </div>
    
    
    `
    divcontain.appendChild(div);
  })


}


const searchmeals = () => {
    
    const searchtext = document.getElementById('searchfeild').value;
    loadmeals(searchtext);
    
}


const loadmodal = idMeal => {
       const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
       //console.log(url);
       fetch(url)
       .then(res => res.json())
       .then(data => showmodaldetails(data.meals[0]))
       .catch(error => {
        console.log(error)
       })
}


// best way async awaite
const loadmodal2 = async(idMeal) =>{
    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    try{
        const res = await fetch(url);
        const data = await res.json();
        showmodaldetails(data.meals[0]);
    }catch(error){
        console.log(error ,'try this again');
    }
}




const showmodaldetails = meal =>{
    document.getElementById('mealsdetailsLabel').innerText = meal.strMeal;
    const modalbody = document.getElementById('modalbody');
    modalbody.innerHTML = `
    <img class = "img-fluid" src = ${meal.strMealThumb}>
    <h4 class = "my-2"> meal types: ${meal.strArea}</h4>
    <h4 class = "my-2"> meal Category: ${meal.strCategory}</h4>
    
    `
    
}


loadmeals('rice');