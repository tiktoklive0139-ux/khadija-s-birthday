const password = "5225";

function checkPassword() {
let userPass = document.getElementById("password").value;

if (userPass === password) {
    document.getElementById("lockScreen").classList.remove("active");
    document.getElementById("loadingScreen").classList.add("active");
    setTimeout(() => {
        document.getElementById("loadingScreen").classList.remove("active");
        document.getElementById("welcomeScreen").classList.add("active");
    }, 3000);
} else {
    alert("Wrong Password ❤️");
}

}

function showGallery() {

document.getElementById("welcomeScreen").classList.remove("active");
document.getElementById("galleryScreen").classList.add("active");
const music = document.getElementById("bgMusic");
if (music) {
    music.play();
}
if (typeof confetti === "function") {
    confetti({
        particleCount: 200,
        spread: 180,
        origin: { y: 0.6 }
    });
}

}

function openLetter() {

document.getElementById("galleryScreen").classList.remove("active");
document.getElementById("letterScreen").classList.add("active");

}

const photos = [
“photos/photo1.jpg”,
“photos/photo2.jpg”,
“photos/photo3.jpg”,
“photos/photo4.jpg”,
“photos/photo5.jpg”,
“photos/photo6.jpg”,
“photos/photo7.jpg”,
“photos/photo8.jpg”,
“photos/photo9.jpg”
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
heart.classList.add("heart");
heart.innerHTML = "❤️";
heart.style.left = Math.random() * 100 + "vw";
heart.style.fontSize = (20 + Math.random() * 25) + "px";
document.body.appendChild(heart);
setTimeout(() => {
    heart.remove();
}, 6000);

}, 500);

function updateCountdown() {

const birthday = new Date("July 5, 2026 00:00:00").getTime();
const now = new Date().getTime();
const distance = birthday - now;
const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const countdown = document.getElementById("countdown");
if (countdown) {
    countdown.innerHTML = "🎂 " + days + " Days Left Until Your Birthday";
}

}

setInterval(updateCountdown, 1000);

updateCountdown();
