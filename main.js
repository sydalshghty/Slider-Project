let SliderImages = Array.from(document.querySelectorAll(".Slider-Container .container img"));

let SliderCount = SliderImages.length;

let numberSlide = document.getElementById("number-Slide");

let currentSlide = 5;

let prevButton = document.getElementById("prev");

let nextButton = document.getElementById("next");

prevButton.onclick = prevSlider;

nextButton.onclick = nextSlider;

let paginationElement = document.createElement("ul");

paginationElement.setAttribute("id", "pagination-ul");

paginationElement.className = "pagination-ul";

for (let i = 1; i<= SliderCount; i++){

    let paginationItem = document.createElement("li");

    paginationItem.setAttribute("data-index", i);

    paginationItem.appendChild(document.createTextNode(i));

    paginationElement.appendChild(paginationItem);
}

document.getElementById("indicators").appendChild(paginationElement);

function prevSlider(){

    if(prevButton.classList.contains("disabled")){

        return false;
    }else{
        currentSlide--;

        theChecker();
    }
}

function nextSlider(){

    if (nextButton.classList.contains("disabled")){

        return false;
    }else{
        currentSlide++;

        theChecker();
    }
}

let paginationul = document.getElementById("pagination-ul");

let paginationulLi = Array.from(document.querySelectorAll("#pagination-ul li"));

for(let i = 0; i < paginationulLi.length; i++){

    paginationulLi[i].onclick = function(){

        currentSlide = parseInt(this.getAttribute("data-index"));

        theChecker();
    }
}

function theChecker(){

    numberSlide.textContent = `Slide #` + [currentSlide] + `of ` + [SliderCount];

    removeAllActiveClass();

    SliderImages[currentSlide - 1].classList.add("active");

    paginationul.children[currentSlide - 1].classList.add("active");

    if(currentSlide == 1){
        prevButton.classList.add("disabled");
    }else{
        prevButton.classList.remove("disabled");
    }

    if(currentSlide == SliderCount){

        nextButton.classList.add("disabled");
    }else{

        nextButton.classList.remove("disabled");
    }
}

theChecker();

function removeAllActiveClass(){

    SliderImages.forEach((img) => {

        img.classList.remove("active");
    });

    paginationulLi.forEach((li) => {

        li.classList.remove("active");
    })
}
