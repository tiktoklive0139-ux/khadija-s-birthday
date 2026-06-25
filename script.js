const password = "5225";

/* ================= PASSWORD ================= */
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

/* ================= GALLERY ================= */
function showGallery() {
    document.getElementById("welcomeScreen").classList.remove("active");
    document.getElementById("galleryScreen").classList.add("active");

    const music = document.getElementById("bgMusic");
    if (music) music.play();

    if (typeof confetti === "function") {
        confetti({
            particleCount: 150,
            spread: 120,
            origin: { y: 0.6 }
        });
    }
}

/* ================= LETTER ================= */
function openLetter() {
    document.getElementById("galleryScreen").classList.remove("active");
    document.getElementById("letterScreen").classList.add("active");
}

/* ================= AUTO IMAGE FIX ================= */
/* IMPORTANT: اگر images root میں ہیں تو یہ استعمال کرو */
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

function startSlideshow() {
    const slide = document.getElementById("slideshow");

    if (!slide) return;

    setInterval(() => {
        current = (current + 1) % photos.length;

        slide.onerror = function () {
            // اگر image missing ہو تو crash نہیں کرے گا
            console.log("Image missing:", photos[current]);
        };

        slide.src = photos[current];
    }, 3000);
}

/* ================= HEARTS ================= */
function startHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "0px";
        heart.style.fontSize = "20px";
        heart.style.opacity = "0.8";
        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }, 400);
}

/* ================= COUNTDOWN ================= */
function updateCountdown() {
    const birthday = new Date("July 5, 2026 00:00:00").getTime();
    const now = new Date().getTime();

    const diff = birthday - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const countdown = document.getElementById("countdown");
    if (countdown) {
        countdown.innerHTML = `🎂 ${days} Days Left`;
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

/* ================= START EVERYTHING ================= */
window.onload = function () {
    startSlideshow();
    startHearts();
};
