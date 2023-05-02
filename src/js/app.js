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
function checkOffset() {
    return window.pageYOffset === 0 ?
        window.innerWidth < 767 ? 150 : 200
        :
        75
}
if (dom.links) {
    for (const link of dom.links) {
        link.addEventListener("click", clickHandler);
    }
    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop - checkOffset();
        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }
}

if (dom.burger) {
    dom.burger.addEventListener('click', function () {
        dom.menu.classList.toggle(css.menuActive)
        this.classList.toggle(css.burgerActive)
    })
}

if (dom.cookieButton) {
    if (localStorage.getItem('cookie_accepted') === 'true') {
        dom.cookieModal.classList.add(css.cookieModalHidden)
    }
    dom.cookieButton.addEventListener('click', () => {
        dom.cookieModal.classList.add(css.cookieModalHidden)
        localStorage.setItem('cookie_accepted', 'true')
    })
}

if (dom.paymentButton) {
    dom.paymentButton.addEventListener('click', () => {
        dom.paymentModal.classList.add(css.paymentModalActive)
    })
}

if (dom.cross) {
    dom.cross.forEach(cross => {
        cross.addEventListener('click', () => {
            dom.modal.forEach(modal => {
                modal.classList.remove(css.paymentModalActive)
                modal.classList.remove(css.connectModalActive)
            })
        })
    });
}

if (dom.headerLinks) {
    dom.headerLinks.forEach(item => {
        item.addEventListener('click', () => {
            dom.menu.classList.toggle(css.menuActive)
            dom.burger.classList.toggle(css.burgerActive)
        })
    })
}
if (dom.closeConnectModal) {
    dom.closeConnectModal.addEventListener('click', () => {
        localStorage.setItem('connect_modal_closed', 'true')
    })
    if (!localStorage.getItem('connect_modal_closed')) {
        setTimeout(() => {
            dom.connectModal.classList.add(css.connectModalActive)
        }, 60000)
    }
}



window.onscroll = () => {
    window.pageYOffset > 87 ? dom.header.classList.add(css.headerFixed) : dom.header.classList.remove(css.headerFixed)
    window.pageYOffset > 150 ? dom.header.classList.add(css.headerTransition) : dom.header.classList.remove(css.headerTransition)
    window.pageYOffset > 150 ? dom.header.classList.add(css.headerActive) : dom.header.classList.remove(css.headerActive)

}

if (dom.playBtn) {
    dom.playBtn.addEventListener('click', () => {
        dom.videoPlaceholder.style.display = css.none
        dom.video.style.display = css.block
        dom.video.play()
    })
}


if (dom.faqInner) {
    dom.faqInner.onclick = (event) => {
        let target = event.target
        if (target.classList.contains('faq__item')) {
            target.classList.toggle(css.faqItemActive)
            target.querySelector('.faq__item-inner').classList.toggle(css.faqItemInnerActive)

            target.classList.contains(css.faqItemActive) ?
                target.querySelector('.faq__item-symbol').textContent = 'A'
                : target.querySelector('.faq__item-symbol').textContent = 'Q'



            let text = target.querySelector('.faq__item-text')

            if (!text.classList.contains(css.faqItemTextActive)) {
                text.classList.add(css.faqItemTextActive);
                text.style.height = 'auto';

                var height = text.clientHeight + 'px';

                text.style.height = '0px';

                setTimeout(function () {
                    text.style.height = height;
                }, 0);
            } else {
                text.style.height = '0px';


                text.addEventListener('transitionend', function () {
                    text.classList.remove(css.faqItemTextActive);
                }, {
                    once: true
                });
            }

        }
        return
    }

}


