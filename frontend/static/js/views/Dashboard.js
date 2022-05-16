import AbstractView from "./AbstractView.js";
import {postsData} from "../PostsData.js";


let innerHTML =``;
export default class extends AbstractView{

    constructor(params){
        super(params);
        this.setTitle("Dashboard");


        innerHTML=``;

        for(let i = 0; i < postsData.length; i++){
            innerHTML += i%2!==0? `
            <tr class="active-row">
                           
            <td>${postsData[i].id}</td>
            <td>${postsData[i].title}</td>
            <td>${postsData[i].likes}</td>
    
            </tr>
            
            `:`
            <tr>
                           
            <td>${postsData[i].id}</td>
            <td>${postsData[i].title}</td>
            <td>${postsData[i].likes}</td>
    
            </tr>
            `
        }

    }

    async getHtml(){
        return `<div class="container">
                <h1>Dashboard</h1>
                <table class="content-table">
                        <thead>
                            <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Likes</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${innerHTML}
                        </tbody>
                 </table>
        </div>`;
    }
}

