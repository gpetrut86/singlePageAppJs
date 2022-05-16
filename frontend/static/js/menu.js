let menuToggle=document.querySelector('.toggle');
let navigation=document.querySelector('.navigation');


menuToggle.onclick=()=>{
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

let list=document.querySelectorAll('.list');


function activeListElement(i){
   //reset classes
   let j=0;
   while(j<list.length){
       list[j++].className='list'
   }
    //add active class
   list[i].className='list active';
}

for(let i=0; i<list.length; i++){

    list[i].onclick=()=>{

        activeListElement(i);
    }
}

document.addEventListener("DOMContentLoaded",()=>{
    
    console.log(location.pathname);


    switch(location.pathname){
        case "/":
            activeListElement(0);
            break;
        case "/posts":
            activeListElement(1);
            break;
        case "/settings":
            activeListElement(2);
            break;
        default:
            activeListElement(0);
           
    }

    if(location.pathname.includes("posts")){
        activeListElement(1);
    }
})

