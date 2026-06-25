const password = "5225";

/* SCREEN SWITCH */
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => {
    s.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

/* PASSWORD CHECK */
function checkPassword() {
  const input = document.getElementById("password").value;

  if (input === password) {
    showScreen("loadingScreen");

    setTimeout(() => {
      showScreen("welcomeScreen");
    }, 2000);

  } else {
    alert("Wrong Password ❤️");
  }
}

/* GALLERY */
function showGallery() {
  showScreen("galleryScreen");

  if (typeof confetti === "function") {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 }
    });
  }
}

/* LETTER */
function openLetter() {
  showScreen("letterScreen");
}
