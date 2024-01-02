const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

const input = document.getElementById('link-input')
const linkForm = document.getElementById('link-form')
const errMsg = document.getElementById('err-msg')

btn.addEventListener('click', navToggle)
linkForm.addEventListener('submit', formSubmit)


// toggle mobile menu 
function navToggle (){
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
}

// validate a URL 
function validURL(str) {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', // fragment locator
    'i'
  );
  return pattern.test(str);
}

function formSubmit (e) {
  e.preventDefault()
  
  if(input.value === ''){
    errMsg.innerHTML = 'please enter something'
    input.classList.add('border-red')
  }else if (!validURL(input.value)){
    errMsg.innerHTML = 'please enter a valid URL'
    input.classList.add('border-red')
  }else{
    errMsg.innerHTML = ''
    input.classList.remove('border-red')
    alert('success')
  }
}