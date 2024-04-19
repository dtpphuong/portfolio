var navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        var targetId = this.getAttribute('href').substring(1);
        var mobileMenu = document.getElementById("mobileNav");
        var body = document.body;

        if (mobileMenu.style.display === "flex") {
            mobileMenu.style.display = "none";
        } else {
            mobileMenu.style.display = "flex";
        }
        body.classList.remove("body-no-scroll");
        var targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        offset: 50,
    });
});

function toggleMenu() {
    var mobileMenu = document.getElementById("mobileNav");
    var body = document.body;

    if (mobileMenu.style.display === "flex") {
        mobileMenu.style.display = "none";
        body.classList.remove("body-no-scroll");
    } else {
        mobileMenu.style.display = "flex";
        body.classList.add("body-no-scroll");
    }
}

function showHoverItem(element, ix) {
    if (ix === 1) {
        const item = element.querySelector('.integrate-item');
        const itemHover = element.querySelector('.integrate-item-hover');
        item.style.opacity = '0';
        itemHover.style.display = 'block';
    } else if (ix === 2) {
        const item = element.querySelector('.integrate-item1');
        const itemHover = element.querySelector('.integrate-item-hover1');
        item.style.opacity = '0';
        itemHover.style.display = 'block';
    } else if (ix === 3) {
        const item = element.querySelector('.integrate-item2');
        const itemHover = element.querySelector('.integrate-item-hover2');
        item.style.opacity = '0';
        itemHover.style.display = 'block';
    } else if (ix === 4) {
        const item = element.querySelector('.integrate-item3');
        const itemHover = element.querySelector('.integrate-item-hover3');
        item.style.opacity = '0';
        itemHover.style.display = 'block';
    } else if (ix === 5) {
        const item = element.querySelector('.integrate-item4');
        const itemHover = element.querySelector('.integrate-item-hover4');
        item.style.opacity = '0';
        itemHover.style.display = 'block';
    } else if (ix === 6) {
        const item = element.querySelector('.integrate-item5');
        const itemHover = element.querySelector('.integrate-item-hover5');
        item.style.opacity = '0';
        itemHover.style.display = 'block';
    } else if (ix === 7) {
        const item = element.querySelector('.integrate-item6');
        const itemHover = element.querySelector('.integrate-item-hover6');
        item.style.opacity = '0';
        itemHover.style.display = 'block';
    }
    else {
        const item = element.querySelector('.integrate-item7');
        const itemHover = element.querySelector('.integrate-item-hover7');
        item.style.opacity = '0';
        itemHover.style.display = 'block';
    }
}

function hideHoverItem(element, ix) {
    if (ix === 1) {
        const item = element.querySelector('.integrate-item');
        const itemHover = element.querySelector('.integrate-item-hover');
        item.style.opacity = '1';
        itemHover.style.display = 'none';
    } else if (ix === 2) {
        const item = element.querySelector('.integrate-item1');
        const itemHover = element.querySelector('.integrate-item-hover1');
        item.style.opacity = '1';
        itemHover.style.display = 'none';
    } else if (ix === 3) {
        const item = element.querySelector('.integrate-item2');
        const itemHover = element.querySelector('.integrate-item-hover2');
        item.style.opacity = '1';
        itemHover.style.display = 'none';
    } else if (ix === 4) {
        const item = element.querySelector('.integrate-item3');
        const itemHover = element.querySelector('.integrate-item-hover3');
        item.style.opacity = '1';
        itemHover.style.display = 'none';
    } else if (ix === 5) {
        const item = element.querySelector('.integrate-item4');
        const itemHover = element.querySelector('.integrate-item-hover4');
        item.style.opacity = '1';
        itemHover.style.display = 'none';
    } else if (ix === 6) {
        const item = element.querySelector('.integrate-item5');
        const itemHover = element.querySelector('.integrate-item-hover5');
        item.style.opacity = '1';
        itemHover.style.display = 'none';
    } else if (ix === 7) {
        const item = element.querySelector('.integrate-item6');
        const itemHover = element.querySelector('.integrate-item-hover6');
        item.style.opacity = '1';
        itemHover.style.display = 'none';
    } else {
        const item = element.querySelector('.integrate-item7');
        const itemHover = element.querySelector('.integrate-item-hover7');
        item.style.opacity = '1';
        itemHover.style.display = 'none';
    }
}

let currentStep = 1;
const totalSteps = 8;

function scrollToNextStep(stepIncrement) {
    currentStep += stepIncrement;
    if (currentStep <= totalSteps) {

        if (currentStep < 1) {
            currentStep = 1;
        } else if (currentStep > totalSteps) {
            currentStep = totalSteps;
        }

        const nextStepPosition = document.querySelector(`.integrate-list-step-position${currentStep}`);

        if (nextStepPosition) {
            const scrollContainer = document.querySelector('.integrate-list-step-overlow');
            scrollContainer.scrollLeft = nextStepPosition.offsetLeft;

        } else {
            console.error(`Không tìm thấy phần tử với lớp .integrate-list-step-position${currentStep}.`);
        }

        const nextButton = document.querySelector('.integrate-btn-list .integrate-btn:last-child');
        if (currentStep >= totalSteps) {
            nextButton.setAttribute('disabled', true);
        } else {
            nextButton.removeAttribute('disabled');
        }

        const prevButton = document.querySelector('.integrate-btn-list .integrate-btn:first-child');
        if (currentStep > 1) {
            prevButton.removeAttribute('disabled');
        } else {
            prevButton.setAttribute('disabled', true);
        }
    }
}

// Slide 

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}