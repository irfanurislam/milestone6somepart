console.log('hle ');

const handlesearch = () => {
    const inputfeild = document.getElementById('ïnputfeild').value;

    if (inputfeild) {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/ ${inputfeild}`;
        /* const res = fetch(url);
        const data = res.json();
        console.log(data); */
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data.message);
                if (data.title === 'No Definitions Found') {
                    alert(data.message);
                } else {
                    display(data);
                }
            })


    }
    else {
        alert("valid input");
    }


};

const display = (data) => {
    const parent = document.getElementById('audio-container');
    data[0].phonetics.forEach(element => {
        const audio = document.createElement('audio');
        audio.src = element.audio;
        const button = document.createElement('button');
        button.innerHTML = 'play';
        button.onclick = () => {
            audio.play();
        };
        const container = document.createElement('div');
        container.appendChild(button);
        container.appendChild(audio);
        parent.appendChild(container);
    });



}


// github

const loadGithubUsers = () => {
    fetch("https://api.github.com/users?per_page=10")
        .then(res => res.json())
        .then(result => {
            console.log(result);
            displayshow(result);
        })
}
const displayshow = (data) => {
    const usercontain = document.getElementById('user-cotnainer');
    data.forEach(user => {
        fetch(`https://api.github.com/users/mojombo/followers`)
            .then(res => res.json())
            .then(data => {

                const div = document.createElement('div');
                div.classList.add("card");
                div.innerHTML= `
                <img class="card-img" src=${user.avatar_url} alt="">
                      <h4>${user.login}</h4>
                      <div>FOllowers:
                      <img class="card-imgf" src=${data[0].avatar_url} alt="">
                      <img class="card-imgf" src=${data[1].avatar_url} alt="">
                      </div>
                
                
                `;
                usercontain.appendChild(div);
            })
    })
}

const follow = (data) =>{

    console.log(data[0]);
    
    
}