//console.log("Hello from js file");
const currentImage = document.getElementById("current");
console.log(currentImage);
const galleryImages = document.querySelectorAll(".img");
console.log(galleryImages);

galleryImages.forEach(img => {
    img.addEventListener("click", (event) => {
        galleryImages.forEach(img => {
            img.style.opacity = 1;
        });
        currentImage.src = event.target.src;
        event.target.style.opacity = 0.6;
    });
});