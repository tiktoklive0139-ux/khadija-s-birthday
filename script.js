const password = "5225";

function checkPassword() {
    let userPass = document.getElementById("password").value;

    if (userPass === password) {
        document.getElementById("lockScreen").classList.remove("active");
        document.getElementById("loadingScreen").classList.add("active");

        setTimeout(() => {
            document.getElementById("loadingScreen").classList.remove("active");
            document.getElementById("welcomeScreen").classList.add("active");
        }, 2500);
    } else {
        alert("Wrong Password ❤️");
    }
}

function showGallery() {
    document.getElementById("welcomeScreen").classList.remove("active");
    document.getElementById("galleryScreen").classList.add("active");

    let music = document.getElementById("bgMusic");
    if (music) music.play();

    if (typeof confetti === "function") {
        confetti({
            particleCount: 150,
            spread: 120,
            origin: { y: 0.6 }
        });
    }
}

function openLetter() {
    document.getElementById("galleryScreen").classList.remove("active");
    document.getElementById("letterScreen").classList.add("active");
}

const photos = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg",
    "photo5.jpg",
    "photo6.jpg",
    "photo7.jpg",
    "photo8.jpg",
    "photo9.jpg"
];

let current = 0;

setInterval(() => {
    const slide = document.getElementById("slideshow");
    if (slide) {
        current = (current + 1) % photos.length;
        slide.src = photos[current];
    }
}, 3000);

setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "0px";
    heart.style.fontSize = "20px";
    heart.style.opacity = "0.8";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}, 400);

function updateCountdown() {
    const birthday = new Date("July 5, 2026 00:00:00").getTime();
    const now = new Date().getTime();

    let diff = birthday - now;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));

    let countdown = document.getElementById("countdown");
    if (countdown) {
        countdown.innerHTML = `🎂 ${days} Days Left`;
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();
