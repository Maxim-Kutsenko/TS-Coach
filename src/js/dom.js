export const dom = {
    menu:document.querySelector('.header__nav'),
    burger:document.querySelector('.burger'),
    cookieButton:document.querySelector('#cookieButton'),
    cookieModal:document.querySelector('.cookie-modal'),
    modal:document.querySelectorAll('.modal'),
    paymentButton:document.querySelector('#paymentButton'),
    paymentModal:document.querySelector('#paymentModal'),
    cross:document.querySelectorAll('.cross'),
    connectModal:document.querySelector('#connectModal'),
    headerLinks:document.querySelectorAll('.header__list-item'),
    video:document.querySelector('video'),
    playBtn:document.querySelector('.video__play-btn'),
    videoPlaceholder:document.querySelector('.video__placeholder'),
    header:document.querySelector('.header'),
    closeConnectModal:document.querySelector('.close-connect-modal'),
    links:document.querySelectorAll('.header__list-item a'),
    
    faqInner:document.querySelector('.faq__inner'),
    faqItemSymbol:document.querySelector('.faq__item-symbol')

}
export const css = {
    menuActive:'header__nav--active',
    burgerActive:'burger--active',
    cookieModalHidden:'cookie-modal--hidden',
    paymentModalActive:'payment-modal--active',
    connectModalActive:'connect-modal--active',
    headerFixed:'header--fixed',
    headerTransition:'header--transition',
    headerActive:'header--active',
    faqItemTextActive:'faq__item-text--active',
    faqItemInnerActive:'faq__item-inner--active',
    faqItemActive :'faq__item--active',
    none:'none',
    block:'block'
}

