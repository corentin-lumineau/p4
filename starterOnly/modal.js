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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//add confirmation when form is correctly submited

//Validations

//First name and last name

const checkName = (element) => {  
    if (element.value.length < 2 || element.value.length == 0) {
      element.closest(".formData").dataset.errorVisible = "true";
      return false;
    }
    else {
      element.closest(".formData").dataset.errorVisible = "false";
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
    element.closest(".formData").dataset.errorVisible = "true";
    return false;
  }
  else {
    element.closest(".formData").dataset.errorVisible = "false";
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
    console.log("ceci est un nombre");
    return true;
  }
  else {
    console.log("ceci n'est pas un nombre");
    return false;
  }
}

const competitionNumber = document.getElementById('quantity');

competitionNumber.addEventListener('change', (event) => {
  checkNumber(event.target.value);
})


//Select city



/* const checkCityInput = () => {
  const cities = document.getElementsByName('location');
  const res = [];
  
  cities.forEach((city) => {
    const cityState = city.checked;
    res.push(cityState);
  });

  if (res.every(elem => elem == false)) {
    console.log("ville pas ok");
    cities.closest(".formData").dataset.errorVisible = "true";
    return false;
    
  }
  else {
    console.log("ville ok");
    return true;
  }
}

const cities = document.getElementsByName('location');
cities.forEach((city) => {
  city.addEventListener('click', (event) => {
    checkCityInput();
  });
}); */

const cities = document.getElementsByName('location');
const checkCities = [];

cities.forEach((city) => {
  city.addEventListener('click', (event) => {
    const cityState = event.currentTarget.checked;
    checkCities.push(cityState);
  });
});



//terms
const terms = document.getElementById('checkbox1');

const checkTerms = (data) => {
  
  if (data.checked == true) {
    return true;
  }
  else {
    return false;
  }
}

terms.addEventListener('click', (event) => {
  checkTerms(event.currentTarget.checked);
})

//Validation on Submit


const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  console.log(formData);
  const formProps = Object.fromEntries(formData);
  console.log(formProps);
})




