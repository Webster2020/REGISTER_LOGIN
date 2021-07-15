'use strict';

import {select, classNames, domElement} from './settings.js';
import {utils} from './utils.js';

console.log(select.switchIcons);

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


// TAKING VALUE FROM INPUT (AND VALIDATION TODO)
const regInpName = domElement.register.input.name;
regInpName.addEventListener('input', (e) => {
  console.log(e.target.value);
  console.log(regInpName.validity.tooShort);
});


// LOGIN/REGISTER SWITCH
const switchLogRegButtons = domElement.switchLogRegButtons;
const regForm = domElement.register.wrapper;
const logForm = domElement.login.wrapper;
for(const button of switchLogRegButtons) {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    regForm.classList.toggle(classNames.formWrappers.active);
    logForm.classList.toggle(classNames.formWrappers.active);
  });
}

// OVERLAY
const closeButtons = domElement.modal.closeButtons;
closeButtons.forEach(function(btn) {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    utils.closeModal();
  });
});

const overlay = domElement.overlay;
overlay.addEventListener('click', function(e) {
  if(e.target === this) {
    utils.closeModal();
  }
});

document.addEventListener('keyup', (e) => {
  if(e.keyCode === 27) {
    utils.closeModal();
  }
});


// REGISTER BUTTON 
{  
  const regButton = domElement.register.button;
  regButton.addEventListener('click', (e) => {
    e.preventDefault();
    utils.openModal(select.modal.regConfirm.id);
    
    // HANDLEBARS  
    {
      const tempModalRegTitle = domElement.modal.regHandlebars.title;
      const dataModalRegTitle = {
        greetingMessage: (regInpName.value != '' ? `Hello ${regInpName.value} !` : 'Hello Stranger. Put correct name please!'),
      };
      const targetModalRegTitle = domElement.modal.regConfirm.titleText;
      utils.addTextToTemp(tempModalRegTitle, dataModalRegTitle, targetModalRegTitle);
    }
    
    {
      const tempModalRegInfo = domElement.modal.regHandlebars.info;
      const dataModalRegInfo = {
        notification: (regInpName.value != '' ? 'registration confirm!' : 'registration reject!'),
      };
      const targetModalRegInfo = domElement.modal.regConfirm.infoText;
      utils.addTextToTemp(tempModalRegInfo, dataModalRegInfo, targetModalRegInfo);
    }
    
    utils.inputClear(regInpName);    
  });
}