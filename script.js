const password = "5225";

/* ================= SCREEN SWITCH ================= */
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

/* ================= PASSWORD CHECK ================= */
function checkPassword() {
  const input = document.getElementById("password").value;

  if (input === password) {
    showScreen("loadingScreen");

    setTimeout(() => {
      showScreen("welcomeScreen");
      startSlideshow(); // slideshow START here (IMPORTANT FIX)
    }, 2000);

  } else {
    alert("Wrong Password ❤️");
  }
}

/* ================= SLIDESHOW FIXED ================= */
const photos = [
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg",
  "photo4.jpg",
  "photo5.jpg",
  "Photo6.jpg",
  "photo7.jpg",
  "photo8.jpg",
  "photo9.jpg"
];

let current = 0;
let slideshowStarted = false;

function startSlideshow() {
  if (slideshowStarted) return; // prevent double start
  slideshowStarted = true;

  const slide = document.getElementById("slideshow");
  if (!slide) return;

  // first image load
  slide.src = photos[0];

  setInterval(() => {
  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heart.style.fontSize = "20px";
  heart.style.animation = "floatUp 5s linear";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
400);
}
/* ================= GALLERY ================= */
function showGallery() {
  showScreen("galleryScreen");
}

/* ================= LETTER ================= */
function openLetter() {
  showScreen("letterScreen");
}

/* ================= AUTO START SAFETY ================= */
window.addEventListener("load", () => {
  // safe load (mobile + laptop)
  console.log("Website Ready ❤️");
});
