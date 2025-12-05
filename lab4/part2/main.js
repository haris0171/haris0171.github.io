const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

//Data Object Creation

const images = [
    { filename: 'pic1.jpg', alt: 'Closeup of a human eye'},
    { filename: 'pic2.jpg', alt: 'Rock that looks like a wave'},
    { filename: 'pic3.jpg', alt: 'Purple and white pansies'},
    { filename: 'pic4.jpg', alt: 'Section of wall from a pharaohs tomb'},
    { filename: 'pic5.jpg', alt: 'Large moth on a leaf' },
];

//base URL
const baseURL = 'https://haris0171.github.io/lab4/part2/images'

//loops through the array of images starting at 1
for (let i = 1; i <= images.length; i++) {
    const newImage = document.createElement("img");
    newImage.src = `${baseURL}pic${i}.jpg`;
    newImage.alt = images[i - 1].alt; // match correct alt text
    thumbBar.appendChild(newImage);

//event lisnter
    newImage.addEventListener("click", updateDisplayedImage);
 }
    function updateDisplayedImage(e) {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
}
