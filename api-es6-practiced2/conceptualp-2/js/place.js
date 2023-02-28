const loaduser = async () =>{
    const url = `https://jsonplaceholder.typicode.com/posts`;
    const res = await fetch(url);
    const data = await res.json();
    postshow(data);


}
const postshow = (data) =>{
    
  for(let posts of data.slice(0,10)) {
    const postcontain = document.getElementById('post-info');
    const div = document.createElement('div');
    div.innerHTML = `
    <h3 class="text-2xl text-center">Post : ${posts.title}</h3>
    `
    postcontain.appendChild(div);
  }
  

}



loaduser();