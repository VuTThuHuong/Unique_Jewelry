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
    var swiper = new Swiper('.slide-categories', {
        slidesPerView: 5,
        spaceBetween: 30,
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
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

 /*============ Footer Bottom =============*/
document.addEventListener('DOMContentLoaded', function() {
    const titleLinks = document.querySelectorAll('.title-links.action-list');

    titleLinks.forEach(link => {
        link.addEventListener('click', function() {
            var openToggle = this.querySelector('.open-children-toggle');
            openToggle.classList.toggle('visible');
            const contentList = this.nextElementSibling; 
            contentList.classList.toggle('visible');
        });
    });
});
