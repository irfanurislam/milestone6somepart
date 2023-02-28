
console.log('HOOOOO O');
function loadusers(){
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => display(data));
}



// inject korlam dom diye 
function display(data){
    const ul = document.getElementById('user-contain')
    for(const user of data){
        const li = document.createElement('li');
        li.innerText = user.username;
        ul.appendChild(li);
    }
}



// post users button work

function postuser(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => postdisplay(data));
}

function postdisplay(posts){
    const postcontainer = document.getElementById('post-container');
    for(const post of posts){
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML=`
        <h4>Id : ${post.id}</h4>
        <h5> post: ${post.title} </h5>
        <p> description : ${post.body}</p>
        
        `
        postcontainer.appendChild(div);
    }
}