// getting the variabel

const card = document.querySelector(".card");
const container = document.querySelector(".container");

// item do z rotate

const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const size = document.querySelector(".sizes");
const info = document.querySelector(".info h3");
const purchase = document.querySelector(".purchase button");

// Now moving the animation

container.addEventListener("mousemove",function(e) {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageX) / 10;

    card.style.transform = 'rotateY('+xAxis+'deg) rotateX('+yAxis+'deg)';
    
});

// animate in

container.addEventListener("mouseenter", (e)=>{
    card.style.transition = "all 0.5s ease";
    title.style.transition = "all 0.75s ease-out";
    sneaker.style.transition = "all 0.75s ease-out";
    size.style.transition = "all 0.75s ease-out";
    info.style.transition = "all 0.75s ease-out";
    purchase.style.transition = "all 0.75s ease-out";

    // pop out
    title.style.transform = "translateZ(150px)";
    info.style.transform = "translateZ(100px)";
    size.style.transform = "translateZ(75px)";
    purchase.style.transform = "translateZ(50px)";
    sneaker.style.transform = "translateZ(100px) rotateZ(45deg)"
})

// animate out
container.addEventListener("mouseleave", (e)=>{
    // card.style.transition = "all 0.5s ease";
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)"
    info.style.transform = "translateZ(0px)";
    size.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
})