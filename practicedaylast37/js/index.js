let fetchdatatrend = [];

const fetchCategories = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => showcategoris(data.data));

};
//fetchCategories();
const showcategoris = (data) => {
    console.log(data);
    console.log(data);
    const containcateoris = document.getElementById('categories-container');
    data.news_category.forEach((singleCategory) => {
        console.log(singleCategory);

        const linkContainer = document.createElement("p");
        linkContainer.innerHTML = `<a class="nav-link" href="#" onclick="fetchCategoryNews('${singleCategory.category_id}', '${singleCategory.category_name}')">${singleCategory.category_name}</a>`;
        containcateoris.appendChild(linkContainer);

    });
};

// fetch all categories id 
const fetchCategoryNews = (category_id, category_name) => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
        .then(res => res.json())
        .then(data => {
            fetchdatatrend = data.data;
            //console.log(fetchdatatrend);
            showallcategory(data.data, category_name)});

};


const showallcategory = (data, category_name) => {
    console.log(data, category_name);
    console.log(data, category_name);
    document.getElementById('news-count').innerText = data.length;
    document.getElementById('category-name').innerText = category_name;
    const newsContainer = document.getElementById("all-news");
    newsContainer.innerHTML = ''
    data.forEach((singlenews) => {
        console.log(singlenews);

        const { _id, image_url, title, details, author, total_view } = singlenews;
        const card = document.createElement("div");
        card.classList.add("card", "mb-3");
        card.innerHTML = `
        <div class="row g-0">
              <div class="col-md-4">
                <img src="${image_url}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8 d-flex flex-column">
                <div class="card-body">
                  <h5 class="card-title">Card title : ${title}</h5>
                  <p class="card-text">${details.slice(0, 200)}...</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>


                <div class="card-footer border-0 bg-body d-flex justify-content-between align-items-center">
                <div class="d-flex gap-2">
            <img src="${author.img}"class="img-fluid rounded-circle" alt="..." height="40" width="40"/>
        <div class="gap-2">
        <p class="m-0 p-0">${author.name ? author.name : 'not available'}</p>
        <p class="m-0 p-0">${author.published_date}</p>
        </div>
        
        
        </div>
       <div class="d-flex align-items-center">
        <i class="fa-solid fa-eye"></i>
        <p class="m-0 p-0">${total_view ? total_view : 'not avaible'}</p>
       </div>
       <div class = gap-2 d-flex>
       <i class="fas fa-star"></i>
       <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half"></i>
</div>
<div>
<i class="fas fa-arrow-right" onclick ="fetchdata('${_id}')" data-bs-toggle="modal"
data-bs-target="#exampleModal"></i>
</div>
        </div>
        

    </div>
    </div>
        
        ` ;
        newsContainer.appendChild(card);
    });
};

const fetchdata = (news_id) => {
    console.log(news_id);
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => newsdisplay(data.data[0]));

}

const newsdisplay = (newsdetails) => {
    console.log(newsdetails);
    const modalbody = document.getElementById('modal-body');
    const { _id, image_url, title, details, author, total_view,others_info } = newsdetails;
    modalbody.innerHTML = `
    <div class= "card mb-3">
    <div class="row g-0">
              <div class="col-md-12">
                <img src="${image_url}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-12 d-flex flex-column">
                <div class="card-body">
                  <h5 class="card-title">Card title : ${title}
                  <span class="badge text-bg-warning">
                 ${others_info.is_trending ? "Trending" : "Not trending"}</span>
                  </h5>
                  <p class="card-text">${details.slice(0, 200)}...</p>
                  <p class="card-text">${others_info.is_trending}</p>
                 
                </div>


                <div class="card-footer border-0 bg-body d-flex justify-content-between align-items-center">
                <div class="d-flex gap-2">
            <img src="${author.img}"class="img-fluid rounded-circle" alt="..." height="40" width="40"/>
        <div class="gap-2">
        <p class="m-0 p-0">${author.name ? author.name : 'not available'}</p>
        <p class="m-0 p-0">${author.published_date}</p>
        </div>
        
        
        </div>
       <div class="d-flex align-items-center">
        <i class="fa-solid fa-eye"></i>
        <p class="m-0 p-0">${total_view ? total_view : 'not avaible'}</p>
       </div>
       <div class = gap-2 d-flex>
       <i class="fas fa-star"></i>
       
        </div>
        </div>
        

    </div>
    </div>
    </div>
        
    
    
    `;


};






const showTrending = () =>{
    const trendingNews = fetchdatatrend.filter(singledata => singledata.others_info.is_trending === true);
    const category_name = document.getElementById('category-name').innerText;
    showallcategory(trendingNews,category_name);
}
const showTodays =()=>{
    const todaysnew = fetchdatatrend.filter(singledata => singledata.others_info.is_todays_pick === true);
    const category_name = document.getElementById('category-name').innerText;
    showallcategory(todaysnew,category_name);
}
