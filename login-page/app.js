const eye = document.querySelector('#eye')
const passwordInput = document.querySelector('#password')

let kondisi = false
eye.addEventListener('click', () => {
  if(kondisi){
    passwordInput.setAttribute('type', 'password')
    kondisi = false
  } else {
    passwordInput.setAttribute('type', 'text')
    kondisi = true
  }
})