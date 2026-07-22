const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showNextSlide() {
    const currentSlide = slides[currentIndex];

    slides.forEach(s => s.classList.remove('exit'));

    const previousIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    slides[previousIndex].classList.add('exit');
    slides[previousIndex].classList.remove('active');
    setTimeout(() => {
        currentSlide.classList.add('active'); 
    }, 100);

    currentIndex = (currentIndex + 1) % slides.length;
}

window.onload = () => {
    setTimeout(showNextSlide, 0.1); 
};

setInterval(showNextSlide, 5000);

const quotes = [
    { title: "Push Your Limits!", text: "Success starts at the end of your comfort zone."},
    { title: "No Excuses!", text: "Your only limit is the one you build in your mind."},
    { title: "Consistency is Key!", text: "Small steps every day lead to big results."},
    { title: "Focus & Fire!", text: "Don't stop until you're proud of yourself."},
    { title: "Stronger Every Day!", text: "Pain is temporary, but pride is forever."},
    { title: "Stay Strong!", text: "Your only limit is you. Push harder than yesterday."}
];

function setRandomQoute(){
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selected = quotes[randomIndex];

    document.querySelector('.sl2 h1').innerText = selected.title;
    document.querySelector('.sl2 p').innerText = selected.text;
}

window.addEventListener('load', setRandomQoute);


// ********************************** Menu active ********************************

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('ul li a');
    const scrollY = window.pageYOffset;

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
        navLinks.forEach(link => link.classList.remove('active'));

        const lastNavLink = document.querySelector('ul li a[href*="Contact"]'); 
        if (lastNavLink) lastNavLink.classList.add('active');
        return;
    }

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 150; 
        const sectionId = current.getAttribute('id');
        const navItem = document.querySelector('ul li a[href*=' + sectionId + ']');

        if (navItem) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navItem.classList.add('active');
            } else {
                navItem.classList.remove('active');
            }
        }
    });
});





// ********************************** Login Page Logic *************************************

const modal = document.getElementById("loginModal");
const closeBtn = document.querySelector(".close-btn");
const loginTrigger = document.querySelector(".Login-button a"); 

if (loginTrigger) {
    loginTrigger.onclick = function(e) {
        e.preventDefault();
        modal.style.display = "flex";
    }
}

if (closeBtn) {
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const loginForm = document.getElementById("loginForm");
const loginBtn = document.getElementById("loginBtn");
const btnText = document.getElementById("btnText");
const btnSpinner = document.getElementById("btnSpinner");

if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        loginBtn.disabled = true;
        btnText.innerText = "Connecting...";
        btnSpinner.style.display = "inline-block";

        const emailValue = document.getElementById("loginEmail").value;
        const username = emailValue.split('@')[0]; 

        localStorage.setItem("currentUsername", username);

        setTimeout(function() {
            window.location.href = "Account.html";
        }, 1200);
    });
}


// ********************************** menu devami *************************************

function toggleMobileMenu() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("active");
}

// إغلاق المنيو تلقائياً عند الضغط على أي رابط داخل القائمة
document.querySelectorAll('.menu ul li a').forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.getElementById("navMenu");
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});


const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});