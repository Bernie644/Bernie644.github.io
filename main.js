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
const loadjson = () => {    //varible that wont change 
  xhr.open('GET', 'identity.json', true)
  xhr.onload = () => {                                          
    if (xhr.status === 200) {                                      //200 means ok 
      console.log(xhr)
      console.log(xhr.responseText)
      let example = "<ul>";
      let writeText = JSON.parse (xhr.responseText)   //takes a string and turn it into an object       stringafy takes an object makes it a string
      writeText.forEach(item => {
        console.log(item);
        console.log(item ["firstName"]);
        console.log(item["lastName"]);
        console.log(item["emailAddress"]);
        document.getElementById('json').innerHTML = item["lastName"]      //the id in the html
        let firstName = item ["firstName"];
        //assigning the array value to a variable called first name
        let lastName = item ["lastName"];
        //make a list in the loop
         example += `<li>${firstName}</li>`;
         example += `<li>${lastName}</li>`;
    });
    example += "</ul>";
    document.getElementById('json').innerHTML = example      //the id in the html

    //how to write to the screen not the console

    let myObj = {"firstName":"firstName","lastName":"lastName", "emailAddress":"emailAddress"};

    let keysArray = Object.keys(myObj); //pull out the keys as a separate array

    for(let i=0;i<keysArray.length;i++){
      console.log(i); //will give the index, from 0 to the length of the keys array

    let currentKey = keysArray[i]; //pull out the current key - "first", "second", etc - into a variable
    
    //now this line doesn't look nearly as scary as it did before!
    console.log(myObj[currentKey]); //will give each value in turn, using the current key
}
    //format the text by consolelogging the array to the screen
      //when you parse and object you take a string and make it an object
      
      console.log (writeText)                         //let assign variable
      //document.getElementById('json').innerHTML = xhr.responseText      //the id in the html
    } else if (xhr.status === 404) console.log('Error. File not found.')
  }
  xhr.send()
}

ajaxTxtBtn.addEventListener('click', loadtxt)
ajaxJsonBtn.addEventListener('click', loadjson)