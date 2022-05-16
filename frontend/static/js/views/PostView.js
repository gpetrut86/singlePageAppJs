import AbstractView from "./AbstractView.js";
import {postsData} from "../PostsData.js";

export default class extends AbstractView{

    constructor(params){
        super(params);
        this.setTitle("Post");
    }

    async getHtml(){
        console.log(this.params.id);
        var theId = this.params.id.replace('/','');

        return`
        <div class="main_post">
        <img src="${postsData[theId].imageUrl}" />
        <div class="main_post_info">
            <div>
                <ion-icon name="thumbs-up-outline"></ion-icon>
                ${postsData[theId].likes}
             </div>
            <h1>Welcome to ${postsData[theId].title} </h1>
            <p>${postsData[theId].description}</p>
        </div> 
     </div>
    
        `;
    }
}