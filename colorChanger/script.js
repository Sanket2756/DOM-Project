let allBtn = document.querySelectorAll('.button');
let body = document.querySelector('body');
console.log(allBtn);

allBtn.forEach((button) => {
  button.addEventListener('click', () => {
    console.log('Button is Clicked');
    body.style.backgroundColor = button.id;
  });
});
