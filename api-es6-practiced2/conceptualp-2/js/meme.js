

const loadmeme = async()=>{
    const url = "https://meme-api.com/gimme/25";
    const res = await fetch(url);
    const data = await res.json();
    displaymeme(data.memes.slice(0,9));
}

const displaymeme =(meme) =>{
    console.log(meme);
    meme.forEach(troll =>{
        const memcontain = document.getElementById('section');
        const div = document.createElement('div');
        div.innerHTML=`
        <div class="card w-full glass shadow-2xl">
  <figure><img class="w-full h-64" src="${troll.url}" alt="car!"/></figure>
  
    </div>
        
        
        `
        memcontain.appendChild(div);
    })
}





loadmeme();