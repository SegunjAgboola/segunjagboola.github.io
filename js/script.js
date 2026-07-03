// Progress Bar

const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

const totalHeight =
document.documentElement.scrollHeight - window.innerHeight;

const progress =
(window.scrollY / totalHeight) * 100;

progressBar.style.width = progress + "%";

});

// Reveal Animation

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", reveal);

function reveal(){

reveals.forEach(section=>{

const top=section.getBoundingClientRect().top;

const visible=window.innerHeight-120;

if(top<visible){

section.classList.add("active");

}

});

}

reveal();

/*=========================
COUNTERS
=========================*/

const counters=document.querySelectorAll(".counter");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const speed=25;

const update=()=>{

if(count<target){

count++;

counter.innerText=count;

setTimeout(update,speed);

}else{

counter.innerText=target;

}

}

update();

observer.unobserve(counter);

}

});

});

counters.forEach(counter=>observer.observe(counter));

/*=========================
MOBILE MENU
=========================*/

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    console.log("Hamburger clicked!");

    navLinks.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

/*=========================
PREMIUM VIDEO POPUP
=========================*/

document.addEventListener("DOMContentLoaded", () => {

const modal = document.querySelector(".video-modal");
const video = document.getElementById("portfolioVideo");

if(!modal || !video){
    console.log("Video modal not found.");
    return;
}

const source = video.querySelector("source");

const title = document.getElementById("videoTitle");
const description = document.getElementById("videoDescription");

const playButtons = document.querySelectorAll(".play-video");
const closeVideo = document.querySelector(".close-video");

playButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        source.src = button.dataset.video;

        video.load();

        video.play();

        const card = button.closest(".portfolio-card");

        title.textContent =
            card.querySelector("h3").textContent;

        description.textContent =
            card.querySelector("p").textContent;

        modal.classList.add("active");

    });

});

function closeModal(){

    modal.classList.remove("active");

    video.pause();

    video.currentTime = 0;

}

closeVideo.addEventListener("click",closeModal);

modal.addEventListener("click",(e)=>{

    if(e.target===modal){

        closeModal();

    }

});

modal.addEventListener("click",(e)=>{

    if(e.target===modal){

        closeModal();

    }

});

});

/*=========================
ACTIVE NAVIGATION
=========================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if(window.scrollY >= sectionTop &&
           window.scrollY < sectionTop + sectionHeight){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});