const password = "5225";

function checkPassword(){
let userPass=document.getElementById("password").value;

if(userPass===password){

document.getElementById("lockScreen").classList.remove("active");
document.getElementById("loadingScreen").classList.add("active");

setTimeout(()=>{
document.getElementById("loadingScreen").classList.remove("active");
document.getElementById("welcomeScreen").classList.add("active");
},3000);

}else{
alert("Wrong Password ❤️");
}
}

function showGallery(){
document.getElementById("welcomeScreen").classList.remove("active");
document.getElementById("galleryScreen").classList.add("active");

document.getElementById("bgMusic").play();
}

const photos=[
"photos/photo1.jpg",
"photos/photo2.jpg",
"photos/photo3.jpg",
"photos/photo4.jpg",
"photos/photo5.jpg",
"photos/photo6.jpg",
"photos/photo7.jpg",
"photos/photo8.jpg",
"photos/photo9.jpg"
];

let current=0;

setInterval(()=>{
const slide=document.getElementById("slideshow");

if(slide){
current=(current+1)%photos.length;
slide.src=photos[current];
}
},3000);

setInterval(()=>{
const heart=document.createElement("div");
heart.classList.add("heart");
heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";
heart.style.fontSize=(20+Math.random()*25)+"px";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);

},500);
