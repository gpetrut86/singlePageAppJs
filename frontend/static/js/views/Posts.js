import AbstractView from "./AbstractView.js";
import {postsData} from "../PostsData.js";

let innerHTML =``;

export default class extends AbstractView{

    constructor(params){
        super(params);
        this.setTitle("Posts");
        innerHTML=``;

        for(let i = 0; i < postsData.length; i++){
            innerHTML += `
            <div class="card">
                <img src="${postsData[i].imageUrl}" alt="${postsData[i].title}" class="card_image" />
            <div class="card_content">
                <h3>${postsData[i].title}</h3>
                <p>${postsData[i].description}</p>
            </div>
            <div class="card_info">
                <div>
                    <ion-icon name="thumbs-up-outline"></ion-icon>
                    ${postsData[i].likes}
                </div>
    
                <div>
                    <a href="/posts/${postsData[i].id}" class="card_link m-link">View Article</a>
    
                </div>
            </div>
        </div>
            
            `
        }
   
    }

   
    createPosts=()=>{


}



    async getHtml(){
        return`
        <div class="container">    
            <h1>Posts </h1>
            </div>
            <div class="cards">
            ${innerHTML}
            </div>
  
       `
     
    }
    
}


// document.addEventListener('DOMContentLoaded',()=>{

//     const app = document.querySelector('#app');

//     const postsContainer = document.createElement('div');
//     postsContainer.classList.add("posts-container");
//     app.appendChild(postsContainer);

//     for(let i = 0; i < postsData.length; i++){
//         const title= document.createElement('h2');
//         title.innerHTML=postsData[i].title;
//         postsContainer.appendChild(title);    
//     }
 
// })
