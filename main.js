const ajaxTxtBtn = document.getElementById('ajax-txt-btn')
const ajaxJsonBtn = document.getElementById('ajax-json-btn')
const ajaxPhpBtn = document.getElementById('ajax-php-btn')

const xhr = new XMLHttpRequest()

const loadtxt = () => {                                                         
  xhr.open('GET', 'nebula.txt', true)                              //Starts the process of getting the document 
  xhr.onload = () => {                                          
    if (xhr.status === 200) {                                      //200 means ok 
      console.log(xhr)
      document.getElementById('text').innerHTML = xhr.responseText      //the id in the html
    } else if (xhr.status === 404) console.log('Error. File not found.')
  }
  xhr.send()
}


ajaxTxtBtn.addEventListener('click', loadtxt)