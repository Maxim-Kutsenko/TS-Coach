import Swiper, { EffectCreative, Navigation, Pagination } from 'swiper';
import { dom, css } from '../js/dom.js'
if (window.innerWidth > 767) {
    const swiper = new Swiper('.swiper', {
        modules: [Navigation, EffectCreative, Pagination],
        loop: true,
        effect: "creative",
        creativeEffect: {
            limitProgress: 2,

            prev: {
                translate: ["-50%", 0, 0],
                opacity: 0.3,
                scale: .9,
            },
            next: {
                translate: ["50%", 0, 0],
                opacity: 0.3,
                scale: .9,
            }
        },

        initialSlide: 1,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.reviews__button--next',
            prevEl: '.reviews__button--prev',
        },
    });
} else {
    const swiper = new Swiper('.swiper', {
        modules: [Navigation, EffectCreative, Pagination],
        observer: true,
        effect: "creative",
        creativeEffect: {
            limitProgress: 2,

            prev: {
                translate: ["-50%", 0, 0],
                opacity: 0,

            },
            next: {
                translate: ["50%", 0, 0],
                opacity: 0,

            }
        },
        initialSlide: 1,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: '.mobile-next',
            prevEl: '.mobile-prev',
        },
        pagination: {
            el: '.fraction',
            type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
                return `<span class="${currentClass}"></span> / <span class="${totalClass}"></span>`
            }
        },
    });
}


dom.burger.addEventListener('click', function () {
    dom.menu.classList.toggle(css.menuActive)
    this.classList.toggle(css.burgerActive)
})

if (localStorage.getItem('cookie_accepted') === 'true') {
    dom.cookieModal.classList.add(css.cookieModalHidden)
}
dom.cookieButton.addEventListener('click', () => {
    dom.cookieModal.classList.add(css.cookieModalHidden)
    localStorage.setItem('cookie_accepted', 'true')
})

dom.paymentButton.addEventListener('click', () => {
    dom.paymentModal.classList.add(css.paymentModalActive)
})

dom.cross.forEach(cross => {
    cross.addEventListener('click', () => {
        dom.modal.forEach(modal => {
            modal.classList.remove(css.paymentModalActive)
            modal.classList.remove(css.connectModalActive)
        })
    })
});

dom.headerLinks.forEach(item => {
    item.addEventListener('click', () => {
        dom.menu.classList.toggle(css.menuActive)
        dom.burger.classList.toggle(css.burgerActive)
    })
})
dom.closeConnectModal.addEventListener('click', () => {
    localStorage.setItem('connect_modal_closed', 'true')
})
if (!localStorage.getItem('connect_modal_closed')) {
    setTimeout(() => {
        dom.connectModal.classList.add(css.connectModalActive)
    }, 60000)
}


window.onscroll = () => {
    if (scrollY >= 100) {
        dom.header.classList.add(css.headerFixed)
    } else {
        dom.header.classList.remove(css.headerFixed)
    }
}

dom.playBtn.addEventListener('click', () => {
    dom.videoPlaceholder.style.display = css.none
    dom.video.style.display = css.block
    dom.video.play()
})