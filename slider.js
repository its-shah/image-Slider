const left = document.querySelector(".left-arrow");
const right = document.querySelector(".right-arrow");
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".image");

let sliderNumber = 1;

let length = images.length;

const nextSlide = () => {
  slides.style.transform = `translateX(-${sliderNumber * 800}px)`;
  sliderNumber++;
};

const prevSlide = () => {
  slides.style.transform = `translateX(-${(sliderNumber - 2) * 800}px)`;
  sliderNumber--;
};

const getFirstSlide = () => {
  slides.style.transform = `translateX(0)`;
  sliderNumber = 1;
};

const getLastSlide = () => {
  slides.style.transform = `translateX(-${(length - 1) * 800}px)`;
  sliderNumber = length;
};

right.addEventListener("click", () => {
  sliderNumber < length ? nextSlide() : getFirstSlide();
});

left.addEventListener("click", () => {
  sliderNumber > 1 ? prevSlide() : getLastSlide();
});
