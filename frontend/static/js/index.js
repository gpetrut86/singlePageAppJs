import Dashboard from './views/Dashboard.js';
import Posts from './views/Posts.js';
import PostView from './views/PostView.js';
import Settings from './views/Settings.js';
 
const pathToRegex= path=> new RegExp("^"+path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)")+"$");

const getParams = match => {
    const values= match.result.slice(1);
    const keys= Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) =>{
        return [key, values[i]];
    }))
}

const navigateTo=url=>{
    history.pushState(null, null, url);
    router();
};


const router= async ()=>{
 
    // /posts/:id
    const routes=[
        {path: '/', view: Dashboard},
        {path: '/posts', view:Posts},
       {path: '/posts:id', view:PostView},
       {path: '/settings', view: Settings}


    ];


    //test each route for potential match

    const potentialMatches=routes.map(route=>{
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        }
    });

    let match =potentialMatches.find(potentialMatche=>potentialMatche.result!==null);

    if(!match) {
        match={
            route:routes[0],
            result:[location.pathname]
        }
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();

   // console.log(match.route.view());
};

window.addEventListener("popstate", router);



let mLinks=document.getElementsByClassName("m-link");

const newNavigation=()=>{

    for(let i=0; i<mLinks.length; i++){

        mLinks[i].addEventListener("click",(e)=>{
            
            e.preventDefault();
            navigateTo(mLinks[i].href);
            
        })
    }
    
}


document.addEventListener("DOMContentLoaded", () => {
  
    newNavigation();
    router();
});

