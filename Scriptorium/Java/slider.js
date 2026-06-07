const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const dotsContainer = document.querySelector(".dots");

let index = 0;


images.forEach((_, i) => {
    const dot = document.createElement("div");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dots div");

function updateSlider() {
    slider.style.transform = `translateX(${-index * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

function nextSlide() {
    index = (index + 1) % images.length;
    updateSlider();
}

function prevSlide() {
    index = (index - 1 + images.length) % images.length;
    updateSlider();
}

function goToSlide(i) {
    index = i;
    updateSlider();
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);


setInterval(nextSlide, 5000);