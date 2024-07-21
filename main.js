document.querySelectorAll('.btn-menu').forEach(button => {
    button.addEventListener('click', event => {
        event.stopPropagation();
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            if (menu.previousElementSibling !== button) {
                menu.classList.remove('open');
            }
        });
        button.nextElementSibling.classList.toggle('open');
    });
});

window.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.remove('open');
    });
});

document.querySelectorAll('.dropdown-menu').forEach(menu => {
    menu.addEventListener('click', event => {
        event.stopPropagation();
    });
});

/* ===== Load Amination Slide =====*/
document.addEventListener('DOMContentLoaded', function() {
    const slideshowText = document.querySelector('.slideshow_text');
    if (slideshowText) {
        slideshowText.classList.add('animation-effect_fadeinup');
    }
});

/*===== Swiper Slide =====*/
document.addEventListener('DOMContentLoaded', function () {
     /*======= Scroll =======*/
     window.addEventListener('scroll', function() {
        const header = document.getElementById("scrollHeader");
        const backTop = document.getElementById('backTop');
        const nsBackTop = document.getElementById('ns__back-top');

        const scrollPosition = window.scrollY;

        // Header animation
        if (scrollPosition > 100) {
            header.classList.add('sticky');
            backTop.classList.add('show');
        } else {
            header.classList.remove('sticky');
            backTop.classList.remove('show');
        }

        const windowHeight = document.documentElement.clientHeight;
        const maxScrollHeight = document.documentElement.scrollHeight - windowHeight;
        const scrollPercentage = (scrollPosition / maxScrollHeight) * 100;
        nsBackTop.style.height = `${scrollPercentage}%`;
    });

    backTop.addEventListener('click', function(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });    
    });

    var swiper = new Swiper('.slide-categories', {
        slidesPerView: 5,
        spaceBetween: 30,
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween : 15,
            },
            768: {
                slidesPerView: 4,
                spaceBetween : 20,
            
            },
            992: {
                slidesPerView: 5,
                spaceBetween : 30,
            },
        }
    });

    var swiper = new Swiper('.slide-production', {
        slidesPerView: 4,
        spaceBetween: 30,
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween : 15,
            },
            768: {
                slidesPerView: 3,
                spaceBetween : 20,
            
            },
            992: {
                slidesPerView: 4,
                spaceBetween : 30,
            },
        }
    });

    var swiper = new Swiper('.slide-socials', {
        slidesPerView: 6,
        spaceBetween: 30,
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween : 15,
            },
            567: {
                slidesPerView: 3,
                spaceBetween : 20,
            
            },
            992: {
                slidesPerView: 6,
                spaceBetween : 30,
            },
        }
    });
});
/*====== Menu ======*/
const mobileToggle = document.getElementById('mobile_menu_toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelectorAll('.close-button');
const overlay = document.querySelector('.overlay_menu');
const menuLinks = document.querySelectorAll('.main-menu-list, .categories-menu')

// Function to show the mobile menu and overlay
const showMobileMenu = () =>{
    mobileMenu.style.left = '0';
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Hide Menu
const hideMenu = () => {
    mobileMenu.style.left = "-300%";
    overlay.classList.remove('show');
    document.body.style.overflow = 'auto';
    document.querySelectorAll('.level').forEach(submenu => {
        setTimeout(() => submenu.classList.remove('show'), 1);
    });
}

mobileToggle.addEventListener('click', showMobileMenu);
closeMenu.forEach(btnClose => btnClose.addEventListener('click', hideMenu));
overlay.addEventListener('click', hideMenu);


const handleSubmenu = (link) => {
    const submenuTarget = document.querySelector(link.getAttribute('data-target'));
    if (submenuTarget) {
        submenuTarget.classList.add('show');
    }
};

// Event listener for submenu links in Menu 1 and Menu 2
document.querySelectorAll('.menu-level > a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        handleSubmenu(link);
    });
});

// Event listener for back buttons in submenus
document.querySelectorAll('.submenu-mobile-title .back-main-menu').forEach(backLink => {
    backLink.addEventListener('click', () => {
        const parentSubmenu = backLink.closest('.level');
        parentSubmenu.classList.remove('show');
        setTimeout(() => parentSubmenu.classList.remove('show'), 1);
    });
});

// Event listener for closing submenus when clicking outside the menu
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !e.target.matches('#mobile_menu_toggle')) {
        document.querySelectorAll('.level').forEach(submenu => {
            setTimeout(() => submenu.classList.remove('show'), 1);
        });
    }
});

/*====== PopUp Search ======*/
const searchInput = document.getElementById('search-form');
const popupSearch = document.querySelector('.popup-search');
const popupSearchContaniner = document.querySelector('.popup-search-container');

searchInput.addEventListener('click', function(){
    popupSearch.classList.add('popup-search-show');
    popupSearchContaniner.classList.add("is-open");
});

document.addEventListener('click', function(event){
    const isClickSearch = searchInput.contains(event.target);
    const isClickPopUp = popupSearch.contains(event.target);

    if(!isClickSearch && !isClickPopUp){
        popupSearch.classList.remove('popup-search-show');
        popupSearchContaniner.classList.remove("is-open");
    }
});

/*====== Countdown ======*/
// Function to update the countdown
function updateCountdown() {
    var targetDate = new Date('2024-12-31T00:00:00Z'); 

    var now = new Date();

    var timeRemaining = targetDate.getTime() - now.getTime();

    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.querySelector('.js-timer-days').textContent = days;
    document.querySelector('.js-timer-hours').textContent = hours;
    document.querySelector('.js-timer-minutes').textContent = minutes;
    document.querySelector('.js-timer-seconds').textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();


 /*========= Footer Bottom =========*/
    const titleLinks = document.querySelectorAll('.title-links.action-list');

    titleLinks.forEach(link => {
        link.addEventListener('click', function() {
            var openToggle = this.querySelector('.open-children-toggle');
            openToggle.classList.toggle('visible');
            const contentList = this.nextElementSibling; 
            contentList.classList.toggle('visible');
        });
});

