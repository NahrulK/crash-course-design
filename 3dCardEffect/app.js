// getting the variabel

const card = document.querySelector(".card");
const container = document.querySelector(".container");

// Now moving the animation

container.addEventListener("mousemove",(e)=> {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageX) / 10;

    console.log(xAxis,yAxis);

    // card.style.transform = 'rotateY('+yAxis+'deg), rotateX('+xAxis+'deg)';
    card.style.color = "black";

});