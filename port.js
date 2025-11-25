/* Toggle icon navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

 // MODAL LOGIC FOR READ MORE BUTTON
 let readMoreBtn = document.querySelector('.about-content .btn');
 let modal = document.getElementById('about-modal');
 let closeModalBtn = document.querySelector('.modal-close');

  // Open Modal
  readMoreBtn.onclick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
};

// Close Modal via 'X'
closeModalBtn.onclick = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore background scrolling
};

// Close modal when user clicks outside of it
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};


/* Scroll section active link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document
                 .querySelector('header nav a[href*=' + id + ']')
                 .classList.add('active');
            });
        }
    });

    /* Sticky navbar */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* Remove toggle icon and navbar on scroll */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/* ScrollReveal */
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box,.experience-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*typed js */
const typed=new Typed('.multiple-text',{
    strings:['Frontend Developer','Web Designer','UI/UX Designer'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true,
}); 


