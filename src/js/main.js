const API_URL_RATES = 'https://munchkin.cosmoscript.ru/api/get_tariff'
const API_URL_COST = 'https://munchkin.cosmoscript.ru/api/get_cost'

// ------- menu -------
const header = document.querySelector('.header')
const hamburger = document.querySelector('.header-hamburger')
const menuItem = document.querySelectorAll('.header-list_item')

const handleMobile = () => {
  header.classList.toggle('active')
}
const closeMenu = () => {
  header.classList.remove('active')
}

hamburger.addEventListener('click', handleMobile)
menuItem.forEach(i => {
  i.addEventListener('click', closeMenu)
})

// ------- anchor -------
const btn = document.querySelector('.banner-btn')
const anchorGames = document.querySelector('#anchor-games')

const scroll = () => {
    window.scroll({
      left: 0,
      top: anchorGames.offsetTop - 110,
      behavior: 'smooth',
    })
}

btn.addEventListener('click', scroll)

// ------- show-rates-items -------
const showRates = (rates) => {
  const ratesList = document.querySelector('.rates-list')

  rates.forEach(r => {
    const rateEl = document.createElement('div')
    rateEl.classList.add('rates-list_item')
    rateEl.innerHTML = `
        <h3>${r.name}</h3>
        <p>${r.description}</p>
        <span>${r.price}p</span>
        `
    ratesList.appendChild(rateEl)
  }
  )

  const rateItems = document.querySelectorAll('.rates-list_item')

  const handlerRates = (e) => {
    rateItems.forEach(r => {
      r.classList.remove('active-rate')
    })
    e.currentTarget.classList.add('active-rate')
  }

  rateItems.forEach(i => {
    i.addEventListener('click', handlerRates)
  })
}

const getRates = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    showRates(data)
  } catch (e) {
    console.log(e)
  }
}

getRates(API_URL_RATES)

// ------- rates-price -------

const rateForm = document.querySelector('.rates-form')
const inputForm = document.querySelector('.rates-form_input')
const price = document.querySelector('#price')

const getInputValue = (e) => {
  e.preventDefault()

  const count = inputForm.value
  if (typeof (+count) === 'number') {
    getPrice(API_URL_COST, count)
  }
  inputForm.value = ''
}

const getPrice = async (url, id) => {
  try {
    const response = await fetch(`${url}/${id}`)
    const data = await response.json()
    price.innerHTML = data.total_cost
  } catch (e) {
    console.log(e)
  }
}

rateForm.addEventListener('submit', getInputValue)