let currentImageIndex = 0;
let images = ["Assets/image 1.png", "Assets/image 2.png", "Assets/image 3.png", "Assets/image 4.png"];

function updateImage() {
    document.getElementById("main-img").src = images[currentImageIndex];
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

function togglePrevButton() {
    let prevButton = document.getElementById("go-left");
    if (currentImageIndex === 0) {
        prevButton.style.display = "none";
    } else {
        prevButton.style.display = "inline-block";
    }
}

function toggleNextButton() {
    let nextButton = document.getElementById("go-right");
    if (currentImageIndex === images.length - 1) {
        nextButton.style.display = "none";
    } else {
        nextButton.style.display = "inline-block";
    }
}

togglePrevButton();
toggleNextButton();


let userInput;
let inputElement = document.getElementById("input");

while (true) {
    userInput = window.prompt("Silahkan Input Nama Anda:");

    if (userInput === null) {
        alert("Anda harus memasukan nama");
    } else if (/^[a-zA-Z\s]+$/.test(userInput) && userInput.trim().length > 0) {
        userInput = userInput.toUpperCase();
        inputElement.innerHTML = userInput;
        break; 
    } else {
        alert("Input tidak valid. Harap masukkan hanya huruf.");
    }
}

const form = document.getElementById("user-form");
const userInfoDiv = document.getElementById("user-info");
const fieldset = document.getElementById("user-answer");
const resetButton = document.getElementById("reset-button")

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    let date = Date(Date.now());
    const username = document.getElementById("username").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById("user-message").value;
    
    if (username && age && email && gender) {
        userInfoDiv.innerHTML = `
            <p>${date}</p>
            <p><strong>Nama: </strong>${username}</p>
            <p><strong>Umur:</strong> ${age}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Jenis Kelamin:</strong> ${gender.value}</p>
            <p><strong>Pesan Untuk Kami :</strong></p>
            <p>${message}</p>
        `;
        userInfoDiv.style.display = "block";
        fieldset.style.display = "block";
    } else {
        alert("Harap lengkapi semua komponen form!");
    }
});

resetButton.addEventListener("click", function() {
    document.getElementById("username").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.getElementById("user-message").value = "";

    userInfoDiv.innerHTML = "";
    userInfoDiv.style.display = "none";
    fieldset.style.display = "none";
});