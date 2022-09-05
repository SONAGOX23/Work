let movies = [
    {
        name: "falcon and the winter soldier",
        des:
            "CAPTION AMERICA .",
        image: "slider 2.png"

    },
    {
        name: "loki",
        des:
            "LOKI MARVEL THOR BROTHER.",
        image: "slider 1.png"
    },
    {
        name: "wanda vision",
        des:
            "SCARLET WITCH.",
        image: "slider 3.png"
    },
    {
        name: "raya and the last dragon",
        des:
            "DRAGON.",
        image: "slider 4.png"
    },
    {
        name: "luca",
        des:
            "LUCA.",
        image: "slider 5.png"
    }

];

const caraousel=document.querySelector('.caraousel')
let slider=[]

let slideIndex=0; //track the current slide

const createSlide = () => {
    if(slideIndex>=movies.length){
        slideIndex=0;
    }

    //create DOM Elements
    let slide= document.createElement('div');
    var imgElement= document.createElement('img');
    let content= document.createElement('div');
    let h1= document.createElement('h1');
    let p= document.createElement('p');
    

    //attaching all elements

    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgElement);
    caraousel.appendChild(slide);

    //setting up images
    imgElement.src=movies[slideIndex].image;
    slideIndex++


    //setting elemnts classnames
    slide.className='slider'
    content.classname='slide-content'
    h1.className='movie-title'
    p.classname ='movie-des'

    slider.push(slide);

    if(slide.length) 
    {
        slide[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;   
    }
}

for (let i=0; i<3; i++){
    createSlide();
}

setInterval(()=>{
    createSlide();
}, 3000);

// Video cards

const videocards= [...document.querySelectorAll('.video-card')];

videocards.forEach(item =>{
    item.addEventListener('mouseover', ()=> {
        let video = item.children[1];
        video.play();
    });
    item.addEventListener('mouseleave', ()=>{
        let video = item.children[1];
        video.pause();
    });
});



//card sliders

// let cardContainers = [...document.querySelectorAll('.card-container')]
// let preBtns = [...document.querySelectorAll('.pre-btn')]
// let nxtBtns = [...document.querySelectorAll('.nxtBtns')]

// cardContainers.forEach((items,i)=>{
//     let containerDimensions = items.getBoundingClientRect();
//     let containerWidth = containerDimensions.Width;

//     nxtBtns[i].addEventListener('click', () => {
//         items.scrollLeft +=containerWidth -200;
//     })
//     preBtns[i].addEventListener('click', () => {
//         items.scrollLeft -=containerWidth +200;
//     })
// })