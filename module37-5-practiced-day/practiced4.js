/*

৭. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে। 



৮. প্রত্যেকটা ফটোতে ক্লিক করলে উপরে আরেকটা div থাকবে। ক্লিক করার পর ডাইনামিকভাবে ওই ফটো এর ডাটা লোড করবে। সেটা করার জন্য আগের ডাটা লোড করার API এর লিংক এর পরে photos এর পরে ডাইনামিকভাবে ${id} বসিয়ে দিবে। এরপর ডিটেইল অংশে photo এর url দিয়ে মেইন ইমেজ এবং thumbnail ইমেজ দুইটাই দেখাবে। সাথে সাথে title প্রপার্টিও দেখাবে। 



৯. তুমি যে ডাটা লোড করেছো। বা ডাটা ওয়েবসাইট এ দেখাচ্ছ। সেই কোড এর মধ্যে arrow ফাংশন ইউজ করতে পারতেছো কিনা। যখন লুপ চালাচ্ছ সেখানে forEach ইউজ করতে পারতেছো কিনা। 
 */

// file llinked kora index.html er sathee


const loaduser =() =>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => display(data.slice(0,5)));
}

const display =(data) =>{
    console.log(data);
    const photocontain = document.getElementById('photo-contain');
    data.forEach(photos => {
        console.log(photos.id);
        const div = document.createElement('div');
        
        div.classList.add('col');
        const {thumbnailUrl,title, url,id} = photos;
        div.innerHTML = `
        <div class="card">
                <img src="${thumbnailUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="text-info card-title">title:${title} </h5>
                  <p class="text-danger card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer ${url}</p>
                  <button onclick="loaduser(${id})" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#usersmodal" >load id</button>
                </div>
                </div>

          
        
        
        
        `;
        photocontain.appendChild(div);

        
    });

};

const userdetails = (id) =>{
  const url = `https://jsonplaceholder.typicode.com/${id}`;
  fetch(url)
  .then(res => res.json())
  .then(data => usermodal(data));
}

const usermodal = (datas) =>{
    console.log(datas);
    
    datas.forEach(user => {
        const label = document.getElementById('labelmodal');
        label.innerText = user.id; 
        const modaluser = document.getElementById('modaluser');
       modaluser.classList.add('modal-body');
        modaluser.innerHTML = `
       
          >h3> id: ${user.id}</h3>
        
      
        
        
        
        `;
        modaluser.appendChild(div);
    })
}



loaduser();
