$(function () {
  $('.gallery__slider').slick({
    speed: 150,
    cssEase: 'linear',
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
})

// -------- hamburger ---------
const hamburger = document.querySelector('.header__hamburger')
const mobileMenu = document.querySelector('.header__menu')

// -------- scroll ---------
const body = document.querySelector('body')
const header = document.querySelector('.header')
const menu = document.querySelector('#menu')
const sectionAbout = document.querySelector('#anchor-about')
const sectionSchedule = document.querySelector('#anchor-schedule')
const sectionPrice = document.querySelector('#anchor-price')
const sectionFaq = document.querySelector('#anchor-faq')
const sectionGallery = document.querySelector('#anchor-gallery')
const sectionContacts = document.querySelector('#anchor-contacts')
const btnMainScroll = document.querySelector('#scroll-main')

// -------- popup ---------
const openPopupForm = document.querySelectorAll('.open-popup-form')
const popupThanks = document.querySelector('#popup-thanks')
const popupThanksText = document.querySelector('#popup-thanks-text')
const popupForm = document.querySelector('#popup-form')
const btnClosePopupForm = document.querySelector('#close-popup-form')
const btnClosePopupThanks = document.querySelector('#close-popup-thanks')

// -------- form ---------
const inputName = document.querySelector('#form-name')
const inputTel = document.querySelector('#form-tel')
const inputText = document.querySelector('#form-text')
const submitFormBtn = document.querySelector('#submit-form')
const wrapperInputs = document.querySelector('.popup__body-input')

// -------- acardion ---------
const faqItems = document.querySelectorAll('.faq__item-title')

const reg = /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/

const toggleHamburger = () => {
  hamburger.classList.toggle('active-hamburger')
  mobileMenu.classList.toggle('active-mobile-menu')
  body.classList.toggle('active-body')
}

const scrollTo = (el) => {
  window.scroll({
    left: 0,
    top: el.offsetTop - 110,
    behavior: 'smooth',
  })
  hamburger.classList.remove('active-hamburger')
  mobileMenu.classList.remove('active-mobile-menu')
  body.classList.remove('active-body')
}

const checkLinkMenu = (e) => {
  if (e.target.id === 'scroll-main') {
    scrollTo(sectionAbout)
  }
  if (e.target.id === 'scroll-about') {
    scrollTo(sectionAbout)
  }
  if (e.target.id === 'scroll-schedule') {
    scrollTo(sectionSchedule)
  }
  if (e.target.id === 'scroll-price') {
    scrollTo(sectionPrice)
  }
  if (e.target.id === 'scroll-faq') {
    scrollTo(sectionFaq)
  }
  if (e.target.id === 'scroll-gallery') {
    scrollTo(sectionGallery)
  }
  if (e.target.id === 'scroll-contacts') {
    scrollTo(sectionContacts)
  }
}

const scrolled = () => {
  if (window.pageYOffset > 600) {
    header.classList.add('active-header')
  } else {
    header.classList.remove('active-header')
  }
}

const showPopupForm = () => {
  popupForm.classList.add('active-popup')
}

const closePopupForm = () => {
  popupForm.classList.remove('active-popup')
}

const filterDate = () => {
  const date = new Date()
  const getDay = date.getDay()
  const getHours = date.getHours()

  if (getDay >= 1 && getDay <= 5 && getHours >= 8 && getHours <= 16) {
    popupThanksText.innerHTML = 'Специалист отдела продаж свяжется с Вами в течение 30 минут'
  } else {
    popupThanksText.innerHTML = 'Спасибо за обращение!  Специалист отдела продаж свяжется с Вами в ближайший рабочий день с 10.00 до 11.00'
  }
}

const submitForm = (e) => {
  if (!reg.test(inputTel.value)) {
    e.preventDefault()
    wrapperInputs.classList.add('active-input-tel')
  } else {
    console.log('true')
  }
}

const accordionToggle = (e) => {
  e.currentTarget.classList.toggle('faq-active')
  const item = e.currentTarget.nextElementSibling
  if (e.currentTarget.classList.contains('faq-active')) {
    item.style.maxHeight = item.scrollHeight + 'px'
  } else {
    item.style.maxHeight = 0
  }
}

const closePopupThanks = () => {
  popupThanks.classList.remove('active-popup')
}

hamburger.addEventListener('click', toggleHamburger)
openPopupForm.forEach(el => {
  el.addEventListener('click', showPopupForm)
})
btnClosePopupForm.addEventListener('click', closePopupForm)
menu.addEventListener('click', checkLinkMenu)
window.addEventListener('scroll', scrolled)
submitFormBtn.addEventListener('click', submitForm)
faqItems.forEach(el => {
  el.addEventListener('click', accordionToggle)
})
btnClosePopupThanks.addEventListener('click', closePopupThanks)
btnMainScroll.addEventListener('click', () => {
  scrollTo(sectionAbout)
})