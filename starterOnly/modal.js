function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalBtnClose = document.querySelector('.close');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal event
modalBtnClose.addEventListener('click', closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

//add confirmation when form is correctly submited

//Validations

//Hide and Show Validations function

function showError(data) {
  data.closest(".formData").dataset.errorVisible = "true";
}

function hideError(data) {
  data.closest(".formData").dataset.errorVisible = "false";
}

//First name and last name

const checkName = (element) => {  
    if (element.value.length < 2 || element.value.length == 0) {
      showError(element);
      return false;
    }
    else {
      hideError(element);
      return true;
    }
}

const firstName = document.getElementById('first');
const lastName = document.getElementById('last');

firstName.addEventListener('change', (event) => {
  checkName(event.currentTarget);
})

lastName.addEventListener('change', (event) => {
  checkName(event.currentTarget);
})

//Email

const checkMail = (element) => {
  const emailReg = new RegExp(/^[^@]+@[^@]+\.[^@]+$/);
  const valid = emailReg.test(element.value);

  if (!valid) {
    showError(element);
    return false;
  }
  else {
    hideError(element);
    return true;
  }
}

const email = document.getElementById('email');

email.addEventListener('change', (event) => {
  checkMail(event.currentTarget);
});

//Competition number



const checkNumber = (data) => {
  data = Number(data);
  if (Number.isInteger(data)) {
    return true;
  }
  else {
    return false;
  }
}

const competitionNumber = document.getElementById('quantity');

competitionNumber.addEventListener('change', (event) => {
  checkNumber(event.target.value);
})


//Select city



const cities = document.getElementsByName('location');
cities.forEach((city) => {
  city.addEventListener('click', () => {
    hideError(city);
  })
})


//terms
const terms = document.getElementById('checkbox1');


terms.addEventListener('click', (event) => {
  const checkbox = event.currentTarget
  if (checkbox.checked) {
    hideError(checkbox);
  }

  else {
    showError(checkbox);
  }
});

//Validations on Submit

/* function checkValue(data) {
  if (data === "") {
    console.log(data);
    const element = document.getElementById('first');
    showError(element);
    return false;
  }
  else {
    const element = document.getElementById('first');
    hideError(element);
    return true;
  }
} */

function checkCity(data) {
  if (!data) {
    const elements = document.getElementsByName('location');
    elements.forEach((element) => {
      element.closest('.formData').dataset.errorVisible = "true";
    });
    return false;
  }
  else {
    return true;
  }
}

function checkFirstName(value) {
  if (value === "") {
    const element = document.getElementById('first');
    showError(element);
    return false;
  }
  else {
    const element = document.getElementById('first');
    hideError(element);
    return true;
  }
}

function checkLastName(value) {
  if (value === "") {
    const element = document.getElementById('last');
    showError(element);
    return false;
  }
  else {
    const element = document.getElementById('last');
    hideError(element);
    return true;
  }
}

function checkPresenceMail(value) {
  if (value === "") {
    const element = document.getElementById('email');
    showError(element);
    return false;
  }
  else {
    const element = document.getElementById('email');
    hideError(element);
    return true;
  }
}

function checkBirthDate(value) {
  if (value === "") {
    const element = document.getElementById('birthdate');
    showError(element);
    return false;
  }
  else {
    const element = document.getElementById('birthdate');
    hideError(element);
    return true;
  }
}

function checkQuantity(value) {
  if (value === "") {
    const element = document.getElementById('quantity');
    showError(element);
    return false;
  }
  else {
    const element = document.getElementById('quantity');
    hideError(element);
    return true;
  }
}


function checkInputs(data) {
  res = [
  checkFirstName(data['first']),
  checkLastName(data['last']),
  checkPresenceMail(data['email']),
  checkBirthDate(data['birthdate']),
  checkQuantity(data['quantity']),
  checkCity(data['location'])
  ];

  if (res.includes(false)) {
    return false;
  }
  else {
    return true;
  }
  

  /* if (!data["terms"]) {
    const element = document.getElementById("checkbox1");
    showError(element);
  }
 
  

  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      value = data[key];

      if (value === "") {
        const element = document.getElementById(`${key}`);
        showError(element);
        return false;
      }
    
      else {
        if (key != "location" && key != "terms") {
          const element = document.getElementById(`${key}`);
          hideError(element);
        }
      } 
    }
  }
  return true;
*/
}


function handleSubmit(event) {
  const formData = new FormData(event.currentTarget);
  const formProps = Object.fromEntries(formData);
  if (!checkInputs(formProps)) {
    event.preventDefault();
  }
  else {
    event.currentTarget.submit();
    alert('Votre formulaire a été correctement envoyé');
  }

}

const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit)




