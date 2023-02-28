document.getElementById('btn-bg').addEventListener('click',function(){

    const friends = document.getElementsByClassName('frineds');
    for(const friend of friends){
        friend.style.backgroundColor = 'red';
    }







})
document.getElementById('btn-append').addEventListener('click',function(){

    const addfriends = document.getElementsByClassName('addnew');
    const divS = document.createElement('div');
    divS.innerHTML= `
    <h1> friends -4 </h1>
    <p> to the add the new frieds  </p>

    
    `
    addfriends.appendChild(divS);







})
