let isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.querySelector("body").classList.add("_mobile");
} else {
    document.querySelector("body").classList.add("_desk");
}

const burger = document.querySelector(".header__burger");
const mobileMenu = document.querySelector(".mobile-menu");
const greetingReq = document.querySelector(".greeting__request");
const reqPopup = document.querySelector(".form-request");
const reqPopupClick = document.querySelector(".form-request__click");

burger.addEventListener("click", event => { burger.classList.toggle("header__burger_active"); mobileMenu.classList.toggle("mobile-menu_active");  });
greetingReq.addEventListener("click", event => { reqPopup.classList.toggle("form-request_active"); });
reqPopupClick.addEventListener("click", event => { reqPopup.classList.toggle("form-request_active"); });

// Experiment
const mainBlock = document.querySelector(".greeting");
mainBlock.style.height = `${window.innerHeight}px`;

document.querySelector("html").addEventListener("click", event => { window.scrollBy(0, window.innerHeight); });