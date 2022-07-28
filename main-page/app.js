const header = document.querySelector('header')
const humberger = document.querySelector('.hamburgerWrapper')

window.addEventListener('scroll', () => {
  header.classList.toggle('stickyNav', window.scrollY > 0)
  header.style.transition = '0.5s'
})

humberger.addEventListener('click', () => {
  header.classList.toggle('humbergerActive')

  document.body.classList.toggle('sidebar')
})