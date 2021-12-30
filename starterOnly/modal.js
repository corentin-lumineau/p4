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

//Hide and Show Validations error

function showError(data) {
  if (data) {
    data.closest(".formData").dataset.errorVisible = "true";
  }
}

function hideError(data) {
  data.closest(".formData").dataset.errorVisible = "false";
}

//Validations on Change

//First name and last name

const firstName = document.getElementById('first');
const lastName = document.getElementById('last');

firstName.addEventListener('change', (event) => {
  checkFirstName(event.currentTarget.value);
})

lastName.addEventListener('change', (event) => {
  checkLastName(event.currentTarget.value);
})

//Email

const email = document.getElementById('email');

email.addEventListener('change', (event) => {
  checkPresenceMail(event.currentTarget.value);
});

//BirthDate

const birthdate = document.getElementById('birthdate');
birthdate.addEventListener('change', (event) => {
  checkBirthDate(event.currentTarget.value);
})

//Competition number


const competitionNumber = document.getElementById('quantity');

competitionNumber.addEventListener('change', (event) => {
  checkQuantity(event.target.value);
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
terms.addEventListener('click', () => {
 checkTerms()
});



//Validations on Submit

const handleSubmit = (event) => {
  event.preventDefault();
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
form.addEventListener('submit', handleSubmit);

const checkInputs = (data) => {
  const res = [
    checkFirstName(data['first']),
    checkLastName(data['last']),
    checkPresenceMail(data['email']),
    checkBirthDate(data['birthdate']),
    checkQuantity(data['quantity']),
    checkCity(data['location']),
    checkTerms()
  ];
  
  if (res.includes(false)) {
    return false;
  }
  else {
    return true;
  }
}

//Validations functions

const checkFirstName = (value) => {
  const element = document.getElementById('first');
  if (value === "" || value.length < 2) {
    showError(element);
    return false;
  }
  else {
    hideError(element);
    return true;
  }
}

const checkLastName = (value) => {
  const element = document.getElementById('last');
  if (value === "" || value.length < 2) {
    showError(element);
    return false;
  }
  else {
    hideError(element);
    return true;
  }
}

const checkPresenceMail = (value) => {
  const emailReg = new RegExp(/^[^@]+@[^@]+\.[^@]+$/);
  const valid = emailReg.test(value);
  const element = document.getElementById('email');

  if (value === "" || !valid) { 
    showError(element);
    return false;
  }
  else {
    hideError(element);
    return true;
  }
}

const checkBirthDate = (value) => {
  const element = document.getElementById('birthdate');
  if (value === "") {
    showError(element);
    return false;
  }
  else {
    hideError(element);
    return true;
  }
}

const checkQuantity = (value) => {
  const element = document.getElementById('quantity');
  if (value) {
    hideError(element);
    return true;
  }
  else {
    showError(element);
    return false;
  }
}

const checkCity = (data) => {
  const elements = document.getElementsByName('location');
  if (!data) {
    elements.forEach((element) => {
      showError(element);
    });
    return false;
  }
  else {
    elements.forEach((element) => {
      hideError(element);
    });
    return true;
  }
}

const checkTerms = () => {
  const element = document.getElementById('checkbox1');
  if (element.checked) {
    hideError(element);
    return true;
  }
  else {
    showError(element);
    return false;
  }
}











