const passwordInputs = document.querySelectorAll('input[name*=password]');
const toggler = document.querySelector('#toggler');

toggler.addEventListener('click', (e) => {
  passwordInputs.forEach(item => {
    if (item.type === "password") {
      item.type = "text";
    } else {
      item.type = "password";
    }
  });
});