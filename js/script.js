/* LOADING↓ */
const loading = document.querySelector('#loading');
const loaded = () => {
    loading.animate({filter: [0, 'blur(20px)'], opacity: [1,0], visibility: 'hidden'}, {duration: 2000, ease: 'easing', fill: 'forwards'});
};

window.addEventListener('load', loaded);
/* LOADING↑ */

/* MENU↓ */
const menuBtn = document.querySelector('#menu_btn');
const closeBtn = document.querySelector('#close_btn');
const menuPanel = document.querySelector('#menu_panel');

menuBtn.addEventListener('click', () => {
    menuPanel.animate({translate:['100vw', 0]}, {duration: 1000, fill: 'forwards'});
    menuBtn.animate({visibility: 'hidden'}, {duration: 1000, fill: 'forwards'});
});

closeBtn.addEventListener('click', () => {
    menuPanel.animate({translate:[0, '100vw']}, {duration: 1000, fill: 'forwards'});
    menuBtn.animate({visibility: 'visible'}, {duration: 1000, fill: 'forwards'});
})

/* MENU↑ */

/* ABOUT↓ */
const aboutTitle = document.querySelector('#about_content h2');
const aboutText = document.querySelector('#about_content div');
const keyframes1 = {
        translate: ['0 60px', 0],
        opacity: [.3, 1],
    };
const option1 = {
        duration: 2000,
        fill: 'forwards',
        rootMargin: '60px 0',
    };

const showAboutTitle = (e) => {
    aboutTitle.animate(keyframes1, option1);
};

const showAboutText = (e) => {
    aboutText.animate(keyframes1, option1);
};

const aboutTitleObserver = new IntersectionObserver(showAboutTitle);
aboutTitleObserver.observe(aboutTitle);

const aboutTextObserver = new IntersectionObserver(showAboutText);
aboutTextObserver.observe(aboutText);

/* ABOUT↑ */

/* GALLERY↓ */
const gallery = document.querySelector('#gallery');
const galleryTitle = document.querySelector('#gallery h2');
const galleryContent = document.querySelector('#gallery_content');

const showGallery = () => {
    const keyframes2 = {
        translate: ['0 150px', 0],
        opacity: [.3, 1],
    };
    
    
    galleryTitle.animate(keyframes2, option1);
    galleryContent.animate(keyframes2, option1);
};

const galleryObserver = new IntersectionObserver(showGallery);
galleryObserver.observe(gallery);

/////

const gridItems = document.querySelectorAll('.item img');
const bigItem = document.querySelector('#big_item img');
const bigItemLink = document.querySelector('#big_item a');
const itemLinks = document.querySelectorAll('.item a');

gridItems.forEach((item) => {
    item.addEventListener('mouseover', (e) => {
        bigItem.src = e.target.src;
        bigItem.animate({opacity:[0,1]}, 500);
    });
});

itemLinks.forEach((link) => {
    link.addEventListener('mouseover', () => {
        bigItemLink.href = link.href;
    });
});
/* GALLERY↑ */

/* CONTACT↓ */
const contact = document.querySelector('#contact');
const contactTitle = document.querySelector('#contact h2');
const form = document.querySelector('#contact div iframe');
const showContact = () => {
    const keyframes3 = {
        translate: ['0 100px', 0],
        opacity: [.3, 1],
    };
    
    contactTitle.animate(keyframes3, option1);
    form.animate(keyframes3, option1);
};

const contactObserver = new IntersectionObserver(showContact);
contactObserver.observe(contact);
/* CONTACT↑ */