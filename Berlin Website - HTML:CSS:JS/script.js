// // // // // // // // function header slider



// get all slides 
let slide1 = document.getElementsByClassName("insideslider")[0];
let slide2 = document.getElementsByClassName("insideslider")[1];
let slide3 = document.getElementsByClassName("insideslider")[2];

// slides table
let imgSlider = [slide1, slide2, slide3];

// get arrows
let arrowLeft = document.getElementsByClassName("fa-arrow-left")[0];
let arrowRight = document.getElementsByClassName("fa-arrow-right")[0];



// function slider
function sliderChange() {
    index = 1;
    j = 0;
    for (let i = 0; i < imgSlider.length; i++) {
        if (imgSlider[i].classList.contains("block")) {
            imgSlider[i].classList.add("none", "fadeOut");
            imgSlider[i].classList.remove("block", "fadeIn");
            i++;

            imgSlider[i].classList.remove("none", "fadeOut");
            imgSlider[i].classList.add("block", "fadeIn");
        } else if (i === index) {
            imgSlider[j].classList.remove("none", "fadeOut");
            imgSlider[j].classList.add("block", "fadeIn");
        }
    }

}


// sliderInterval
setInterval(sliderChange, 10000);


// changeslide on click
arrowLeft.addEventListener("click", sliderChange);
arrowRight.addEventListener("click", sliderChange);


// // // // // // // // function media slider

// get slides
let mediaSlide1 = document.getElementsByClassName("mediaSlide")[0];
let mediaSlide2 = document.getElementsByClassName("mediaSlide")[1];
let mediaSlide3 = document.getElementsByClassName("mediaSlide")[2];

// slides table
let mediaSlides = [mediaSlide1, mediaSlide2, mediaSlide3];

// get buttons
let buttons = document.querySelectorAll(".mediaButton");
console.log(buttons);

// function slider
function mediaSliderChange() {
    index = 1;
    j = 0;
    for (let i = 0; i < imgSlider.length; i++) {
        if (mediaSlides[i].classList.contains("block")) {

            // first slide goes off

            mediaSlides[i].classList.add("none", "fadeOut");
            mediaSlides[i].classList.remove("block", "fadeIn");

            buttons[i].classList.add("unround");
            buttons[i].classList.remove("round");

            i++;

            // second slide comes in

            mediaSlides[i].classList.remove("none", "fadeOut");
            mediaSlides[i].classList.add("block", "fadeIn");

            buttons[i].classList.add("round");
            buttons[i].classList.remove("unround");

        } else if (i === index) {

            // back to the beginning

            mediaSlides[j].classList.remove("none", "fadeOut");
            mediaSlides[j].classList.add("block", "fadeIn");

            buttons[j].classList.add("round");
            buttons[j].classList.remove("unround");
        }
    }
}

// interval
setInterval(mediaSliderChange, 10000);



// changeslide on click
buttons[0].addEventListener("click", function() {
    for (k = 0; k < mediaSlides.length; k++) {
        mediaSlides[k].classList.add("none");
        mediaSlides[k].classList.remove("block");
        buttons[k].classList.remove("round");
        buttons[k].classList.add("unround");
    }
    mediaSlide1.classList.remove("none", "fadeOut");
    mediaSlide1.classList.add("block", "fadeIn");
    buttons[0].classList.add("round");
    buttons[0].classList.remove("unround");
});
buttons[1].addEventListener("click", function() {
    for (k = 0; k < mediaSlides.length; k++) {
        mediaSlides[k].classList.add("none");
        mediaSlides[k].classList.remove("block");
        buttons[k].classList.remove("round");
        buttons[k].classList.add("unround");
    }
    mediaSlide2.classList.remove("none", "fadeOut");
    mediaSlide2.classList.add("block", "fadeIn");
    buttons[1].classList.add("round");
    buttons[1].classList.remove("unround");
});
buttons[2].addEventListener("click", function() {
    for (k = 0; k < mediaSlides.length; k++) {
        mediaSlides[k].classList.add("none");
        mediaSlides[k].classList.remove("block");
        buttons[k].classList.remove("round");
        buttons[k].classList.add("unround");
    }
    mediaSlide3.classList.remove("none", "fadeOut");
    mediaSlide3.classList.add("block", "fadeIn");
    buttons[2].classList.add("round");
    buttons[2].classList.remove("unround");
});