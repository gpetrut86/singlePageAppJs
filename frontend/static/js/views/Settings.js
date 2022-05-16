import AbstractView from "./AbstractView.js";


export default class extends AbstractView{

    constructor(params){
        super(params);
        this.setTitle("Settings");
    }

    async getHtml(){
        return`
        <div class="container">
        <h1>Welcome to Settings </h1>

        </div>
        `;
    }
}