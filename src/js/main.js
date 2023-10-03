const header  = document.querySelector('.header')
const hamburger = document.querySelector('.header-hamburger')
const menuItem = document.querySelectorAll('.header-list_item')

const handleMobile = () => {
  header.classList.toggle('active')
}
const closeMenu = () => {
  header.classList.remove('active')
}

hamburger.addEventListener('click', handleMobile)
menuItem.forEach(i=> {
  i.addEventListener('click', closeMenu)
})