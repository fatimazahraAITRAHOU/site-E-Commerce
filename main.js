let bar = document.getElementById('bar');
let close = document.getElementById('close');
let nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}

// product shop
let bigImage = document.getElementById('BigImage');
let smallImage = document.getElementsByClassName('smallImage');


if (smallImage.length) {
    for (let i = 0; i <= 5; i++) {
        smallImage[i].onclick = function () {
            bigImage.src = smallImage[i].src;
        }
    }
}


function changeProductImage(bigImageSrc) {
    var bigImage = document.getElementById("BigImage");
    bigImage.src = bigImageSrc;
  }
  
  function changeProductColor(bigImageSrc, smallImagesSrc) {
    var bigImage = document.getElementById("BigImage");
    bigImage.src = bigImageSrc;
  
    var smallImages = document.getElementsByClassName("smallImage");
    for (var i = 0; i < smallImages.length; i++) {
      smallImages[i].src = smallImagesSrc[i];
    }
  }

//   login
let container = document.getElementById('container-login');
let registerBtn = document.getElementById('register');
let loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
  

const form = document.querySelector('.sign-up form');
const lastNameInput = document.getElementById('LastName');
const firstNameInput = document.getElementById('FirstName');
const emailInput = document.getElementById('Email');
const passwordInput = document.getElementById('Password');
const confirmPasswordInput = document.getElementById('Return The Password');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    document.querySelectorAll('.error').forEach(function(element) {
        element.textContent = '';
    });

    if (lastNameInput.value.trim() === '') {
        document.getElementById('lastNameError').textContent = 'Please enter your last name.';
        return;
    }
    if (firstNameInput.value.trim() === '') {
        document.getElementById('FirstNameError').textContent = 'Please enter your first name.';
        return;
    }
    if (emailInput.value.trim() === '') {
        document.getElementById('EmailError').textContent = 'Please enter your Email.';
        return;
    }
    if (!isValidEmail(emailInput.value.trim())) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        return;
    }
    if (passwordInput.value.trim() === '') {
        document.getElementById('PasswordError').textContent = 'Please enter your Password.';
        return;
    }
    if (passwordInput.length<6) {
        document.getElementById('PasswordError').textContent = 'Please enter your Password.';
        return;
    }
    if (confirmPasswordInput.value.trim() === '') {
        document.getElementById('Return The PasswordError').textContent = 'Please enter Return The Password.';
        return;
    }
    if (passwordInput !== confirmPasswordInput) {
        document.getElementById('Return The PasswordError').textContent = 'Passwords do not match.';
        return;
    }
});
function isValidEmail(emailInput) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailInput);
}