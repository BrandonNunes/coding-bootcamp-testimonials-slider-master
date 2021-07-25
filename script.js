const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slider = document.querySelectorAll(".slider");

var slideNumber = 0;
var numberOfSlide = slider.length;


next.addEventListener("click", () => {
    slider.forEach((slide) => {
        slide.classList.remove("active");
    });

    slideNumber++

    if(slideNumber > numberOfSlide -1){
        slideNumber = 0;
    }

    slider[slideNumber].classList.add("active");
});

prev.addEventListener("click", () => {
    slider.forEach((slide) => {
        slide.classList.remove("active");
    });

    slideNumber--

    if(slideNumber < 0){
        slideNumber = numberOfSlide -1; 
    }

    slider[slideNumber].classList.add("active");

})
const time = 7000;

setInterval( () => {
    slider.forEach((slide) => {
        slide.classList.remove("active");
    });

    slideNumber++

    if(slideNumber > numberOfSlide -1){
        slideNumber = 0;
    }

    slider[slideNumber].classList.add("active");
}, time);
