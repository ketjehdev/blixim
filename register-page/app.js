const eye = document.querySelectorAll('#eye')
const input = document.querySelectorAll('#passwordInput')


eye.forEach(eyeObj => {
  input.forEach(pwInput => {
    eyeObj.style.cursor = 'pointer'
  
    let kondisi = false
    eyeObj.addEventListener('click', () => {
      if(kondisi){
        pwInput.setAttribute('type','password')
        kondisi = false
      } else {
        pwInput.setAttribute('type', 'text')
        kondisi = true
      }
    })
  });
});
