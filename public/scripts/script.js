const $ = (el) => document.querySelector(el);
const $$ = (el) => document.querySelectorAll(el);

$('#toggler').addEventListener('click', (e) => {
  $$('input[name*=password]').forEach(item => {
    if (item.type === "password") {
      item.type = "text";
    } else {
      item.type = "password";
    }
  });
});