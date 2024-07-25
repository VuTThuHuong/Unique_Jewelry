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
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
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
        },
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
                spaceBetween : 30,
            
            },
            992: {
                slidesPerView: 4,
                spaceBetween : 30,
            },
        }
    });

    var swiper = new Swiper('.slide-socials', {
        slidesPerView: 6,
        spaceBetween: 5,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            567: {
                slidesPerView: 3,
            
            },
            992: {
                slidesPerView: 6,
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
    document.body.style.overflowY = 'auto';
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
document.querySelectorAll('.menu-level').forEach(link => {
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

/*====== View All Demo ======*/
const viewAllDemo = document.querySelector('.loadmore-menu');
const dlg = document.querySelector('.dlg-demo-feature-full');
const exitDialogView = document.querySelector('.close-button-dlg');
function showDialog(){
    dlg.classList.add('show');
}
function hideDialog(){
    dlg.classList.remove('show');
}
viewAllDemo.addEventListener('click', showDialog);
exitDialogView.addEventListener('click', hideDialog);

dlg.addEventListener('click', function(event) {
    if (!event.target.closest('.dlg-demo-feature')) {
        hideDialog();
    }
});

dlg.querySelector('.dlg-demo-feature').addEventListener('click', function(event) {
    event.stopPropagation();
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

/*====== Cart ======*/
const cartButton = document.querySelectorAll('.minicart-action');
const overlayCart = document.querySelector('.overlay_cart');
const cart = document.querySelector('.minicart-wrapper');
const cartCounts = document.querySelectorAll('.cart-count');
const closeCart = document.querySelector('.close-button-minicart');
const addToCart = document.querySelectorAll('.btn-addtocart');
const cartItemsContainer = document.querySelector('.product-list-cart');
const cartTotal = document.querySelector('.bls-subtotal-price');
const cartEmpty = document.querySelector('.cart-body');
const formCart = document.getElementById('form-mini-cart');
const freeShippingThreshold = 100.00;
const progressBar = document.querySelector('.percent_shipping_bar');
const freeShippingMessage = document.querySelector('.cart-thres');
const iconShipping = document.querySelector('.freeshipping-icon');
const returnShop = document.querySelector('.button-close-cart');


const minicartNote = document.querySelector('.mini_cart_note');
const note = document.getElementById('note');
const minicartGift = document.querySelector('.mini_cart_gift');
const gift = document.getElementById('gift');
const minicartShipping = document.querySelector('.mini_cart_shipping');
const shipping = document.getElementById('shipping');
const overlayMinicart = document.querySelector('.minicart-content');

let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

const updateLocalStorage = () => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

const showCart = () => {
    cart.classList.add('show');
    overlayCart.classList.add('show');
    document.body.style.overflow = 'hidden';
}

const hideCart = () => {
    cart.classList.remove('show');
    overlayCart.classList.remove('show');
    document.body.style.overflowY = 'auto';
    document.body.style.overflowX = 'hidden';
}

cartButton.forEach(button => {
    button.addEventListener('click', showCart)})

const updateProgress = (progressPercentage) => {
    if (progressPercentage > 100) {
        progressPercentage = 100;
    }

    progressBar.style.width = `${progressPercentage}%`;
    iconShipping.style.left = `${progressPercentage}%`;

    if (progressPercentage > 0) {
        progressBar.style.backgroundColor = '#0D53BB';}
    else {
        progressBar.style.backgroundColor = '#ebebeb'; 
    }
};

const updateCart = () => {
    cartItemsContainer.innerHTML = '';

    if (cartItems.length === 0) {
        cartEmpty.style.display = "flex";
        formCart.style.display = "none";
        cartTotal.textContent = '$0.00';
        cartCounts.forEach(cartCount => {
            cartCount.textContent = '0';
        });
        freeShippingMessage.innerHTML = `<span class="free-shipping-message">Spend $${freeShippingThreshold.toFixed(2)} more to enjoy <span class="freeship-text">FREE SHIPPING!</span></span>`;
        progressBar.style.width = '0%';
        iconShipping.style.left = `0%`;
    } else {
        cartEmpty.style.display = "none";
        formCart.style.display = "flex";
        cartItems.innerHTML = ''; 
        let totalPrice = 0;
        let totalQuantity = 0;

        cartItems.forEach(item => {
            if (item.newPrice !== null && item.discountPrice !== null) {
                priceContent = `
                    <p class="pro-price my-10">
                        <span class="paragraph-font pro-price-new fw-500">$${item.newPrice.toFixed(2)}</span>
                        <span class="pro-price-del"><del>$${item.discountPrice.toFixed(2)}</del></span>
                    </p>
                `;
            } else if (item.price !== null) {
                priceContent = `<p class="pro-price pro-price-regular mb-0 paragraph-font fw-500">
                                    $${item.price.toFixed(2)}
                                </p>`;
            }

            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item', 'flex', 'flex-row');
            itemElement.innerHTML = `
                                                    <div class="cart-image">
                                                        <a aria-label="product image 1" href="#"
                                                            class="aspect-ratio-container" style="--aspect-ratio: 1/1;">
                                                            <img src="${item.img}" loading="lazy" width="462"
                                                                height="462" alt="${item.name}">
                                                        </a>
                                                    </div>
                                                    <div class="pro-info m-0">
                                                        <h4 class="pro-name paragraph-font heading m-0">
                                                            <a aria-label="Name product" href="#">${item.name}</a>
                                                        </h4>
                                                         ${priceContent}
                                                        <div class="minicart-actions">
                                                            <div class="quality">
                                                                <button
                                                                    class="quantity_button btn-reset flex justify-content-center align-items-center"
                                                                    name="minus" type="button">
                                                                    <svg width="11" height="12" viewBox="0 0 11 2"
                                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M11 0.5L11 1.5L-4.37114e-08 1.5L0 0.5L11 0.5Z"
                                                                            fill="#111111"></path>
                                                                    </svg>
                                                                </button>
                                                                <input class="quantity-input text-center p-0-important"
                                                                    type="text" name="updates[]" value="${item.quantity}" data-value="${item.quantity}">
                                                                <button
                                                                    class="quantity_button btn-reset flex justify-content-center align-items-center"
                                                                    name="plus" type="button">
                                                                    <svg width="11" height="12" viewBox="0 0 11 12"
                                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                                            d="M5 11.5H6L6 6.5H11V5.5H6L6 0.5H5L5 5.5H0V6.5H5L5 11.5Z"
                                                                            fill="#111111"></path>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="item-edit flex flex-column align-items-center">
                                                        <button class="icon-remove" aria-label="remove item">
                                                            <span class="icon-trash-2"></span>
                                                        </button>
                                                    </div>
                        
            `;
            cartItemsContainer.appendChild(itemElement);

            itemElement.querySelector('[name="minus"]').addEventListener('click', () => {
                if (item.quantity > 1) {
                    item.quantity--;
                } else {
                    cartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
                }
                updateCart();
            });

            itemElement.querySelector('[name="plus"]').addEventListener('click', () => {
                item.quantity++;
                updateCart();
            });

            itemElement.querySelector('[aria-label="remove item"]').addEventListener('click', () => {
                cartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
                updateCart();
            });

            totalPrice += (item.newPrice !== null ? item.newPrice : item.price) * item.quantity;
            totalQuantity += item.quantity;
        });
        

        cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
        cartCounts.forEach(cartCount => {
            cartCount.textContent = totalQuantity;
        });

        const remainingAmount = freeShippingThreshold - totalPrice;
        const progressPercentage = (totalPrice / freeShippingThreshold) * 100;

        updateProgress(progressPercentage);
        if (remainingAmount > 0) {
            progressBar.style.width = `${(totalPrice / freeShippingThreshold) * 100}%`;
            freeShippingMessage.innerHTML = `<span class="free-shipping-message">Spend $${remainingAmount.toFixed(2)} more to enjoy <span class="freeship-text">FREE SHIPPING!</span></span>`;
        } else {
            progressBar.style.width = '100%';
            freeShippingMessage.innerHTML = `<span class="free-shipping-message">Congratulations! You've got free shipping!</span>`;
        }
    }
    updateLocalStorage();
}

addToCart.forEach(btn =>{
    btn.addEventListener('click', (e) => {
        const productElement = e.target.closest('.col-pro-items');
        const productName = productElement.querySelector('.pro-name a').textContent;
        const productImg = productElement.querySelector('.pro-image img').src;

        let productPrice = null;
        let newPrice = null;
        let discountPrice = null;

        const regularPriceElement = productElement.querySelector('.pro-price-regular');
        const discountPriceElement = productElement.querySelector('.pro-price-del');
        const newPriceElement = productElement.querySelector('.pro-price-new');

        if (regularPriceElement) {
            productPrice = parseFloat(regularPriceElement.textContent.replace('$', ''));
        }

        if (discountPriceElement) {
            discountPrice = parseFloat(discountPriceElement.textContent.replace('$', ''));
        }

        if (newPriceElement) {
            newPrice = parseFloat(newPriceElement.textContent.replace('$', ''));
        }

        // const existingItem = cartItems.find(item => item.name === productName);
        const existingItem = cartItems.find(item => item.id === Date.now());
        if(existingItem){
            existingItem.quantity++;
        }
        else {
            cartItems.push({
                id: Date.now(),
                name: productName,
                price: productPrice,
                newPrice: newPrice,
                discountPrice: discountPrice,
                img: productImg,
                quantity: 1
            });
        }
        updateCart();
        showCart();
    })
});

minicartNote.addEventListener('click', () => {
    note.classList.add('show');
    overlayMinicart.classList.add('show');
});

minicartGift.addEventListener('click', () => {
    gift.classList.add('show');
    overlayMinicart.classList.add('show');
});

minicartShipping.addEventListener('click', () => {
    shipping.classList.add('show');
    overlayMinicart.classList.add('show');
});

returnShop.addEventListener('click', hideCart);
closeCart.addEventListener('click', hideCart);
overlayCart.addEventListener('click', hideCart);

const cancelButtons = document.querySelectorAll('.btn-cancel');
cancelButtons.forEach(button => {
    button.addEventListener('click', function () {
        this.closest('.addon').classList.remove('show');
        overlayMinicart.classList.remove('show');
    });
});
updateCart(); 

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
    const titleLinks = document.querySelectorAll('.title-links');

    titleLinks.forEach(link => {
        link.addEventListener('click', function() {
            var openToggle = this.querySelector('.open-children-toggle');
            openToggle.classList.toggle('visible');
            const contentList = this.nextElementSibling; 
            contentList.classList.toggle('visible');
        });
});

