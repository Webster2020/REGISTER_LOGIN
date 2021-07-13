const endPointGet = '//localhost:3131/exData';
const endPointPost = '//localhost:3131/newData';

//GET
const downloadData = {};

fetch(endPointGet) 
  .then(function(response) {
    const data = response.json();
    return data;
  })
  .then(function(data) {
    console.log(data);
    downloadData.data = data;
    console.log(downloadData);
  });

//GET
const downloadData2 = {};

const getData = (event) => {
  event.preventDefault();
  fetch(endPointPost) 
    .then(function(response) {
      const data2 = response.json();
      return data2;
    })
    .then(function(data2) {
      console.log(data2);
      downloadData2.data2 = data2;
      console.log(downloadData2);
    });
};

const getButton = document.querySelector('.button-register');
getButton.addEventListener('click', getData);

//POST
const payload = {
  person: {
    id: '5',
    name: 'Ben',
  }
};

const option = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(payload),
};

const postData = (event) => {
  event.preventDefault();
  fetch(endPointPost, option);
};

const postButton = document.querySelector('.button-register');
postButton.addEventListener('click', postData);

//NEW
const inputName = document.querySelector('.input-text');
inputName.addEventListener('input', (e) => {
  console.log(e.target.value);
  console.log(inputName.validity.tooShort);
});

const switchButtons = document.querySelectorAll('.login-icon i');
const formRegister = document.querySelector('.form-register');
const formLogin = document.querySelector('.form-login');
for(let switchButton of switchButtons) {
  switchButton.addEventListener('click', (e) => {
    e.preventDefault();
    formRegister.classList.toggle('active');
    formLogin.classList.toggle('active');
  });
}
