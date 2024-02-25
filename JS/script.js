/*var currentImageIndex = 0;
var images = ["Assets/Piramida\ Summarecon.jpg", "Assets/Gedung\ Sate.jpg", "Assets/Patung\ Suroboyo.jpg"];

function prevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        document.getElementById("main-img").src = images[currentImageIndex];
    }
}

function nextImage() {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        document.getElementById("main-img").src = images[currentImageIndex];
    }
} */

var currentImageIndex = 0;
var images = ["Assets/Gedung\ Sate.jpg", "Assets/Piramida\ Summarecon.jpg", "Assets/Patung\ Suroboyo.jpg"];

function updateImage() {
    document.getElementById("main-img").src = images[currentImageIndex];
}

function togglePrevButton() {
    var prevButton = document.getElementById("go-left");
    if (currentImageIndex === 0) {
        prevButton.style.display = "none";
    } else {
        prevButton.style.display = "inline-block";
    }
}

function toggleNextButton() {
    var nextButton = document.getElementById("go-right");
    if (currentImageIndex === images.length - 1) {
        nextButton.style.display = "none";
    } else {
        nextButton.style.display = "inline-block";
    }
}

function prevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        updateImage();
        togglePrevButton();
        toggleNextButton();
    }
}

function nextImage() {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        updateImage();
        togglePrevButton();
        toggleNextButton();
    }
}

togglePrevButton();
toggleNextButton();
