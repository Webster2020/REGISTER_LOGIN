'use strict';

import {classNames, domElement} from './settings.js';
import {utils} from './utils.js';


// API TESTING DATA GET / POST

//const endPointGet = '//localhost:3131/exData';
//const endPointPost = '//localhost:3131/newData';
//const endPointRegGet = '//localhost:3131/users';

// //GET
// const downloadData = {};

// fetch(endPointGet) 
//   .then(function(response) {
//     const data = response.json();
//     return data;
//   })
//   .then(function(data) {
//     console.log(data);
//     downloadData.data = data;
//     console.log(downloadData);
//   });

// //GET
// const downloadData2 = {};

// const getData = (event) => {
//   event.preventDefault();
//   fetch(endPointPost) 
//     .then(function(response) {
//       const data2 = response.json();
//       return data2;
//     })
//     .then(function(data2) {
//       console.log(data2);
//       downloadData2.data2 = data2;
//       console.log(downloadData2);
//     });
// };

// //GET
// const downloadData3 = {};

// const getData2 = () => {
//   fetch(endPointRegGet) 
//     .then(function(response) {
//       const data3 = response.json();
//       return data3;
//     })
//     .then(function(data3) {
//       console.log(data3);
//       downloadData3.data3 = data3;
//       console.log(downloadData3);
//     });
// };

//const getButton = document.querySelector('.button-register');
//getButton.addEventListener('click', getData);

//POST
// const payload = {
//   person: {
//     id: '5',
//     name: 'Ben',
//   }
// };

// const option = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(payload),
// };

// const postData = (event) => {
//   event.preventDefault();
//   fetch(endPointPost, option);
// };

//const postButton = document.querySelector('.button-register');
//postButton.addEventListener('click', postData);

// <- END TESTING API


// TAKING VALUE FROM INPUTS (AND VALIDATION TODO)
const regInpName = domElement.register.input.name;
// regInpName.addEventListener('input', (e) => {
//   console.log(e.target.value);
//   console.log(regInpName.validity.tooShort);
// });

const regInpEmail = domElement.register.input.email;
// regInpEmail.addEventListener('input', (e) => {
//   console.log(e.target.value);
//   console.log(regInpEmail.validity.tooShort);
// });

const regInpPassword = domElement.register.input.password;
// regInpPassword.addEventListener('input', (e) => {
//   console.log(e.target.value);
//   console.log(regInpPassword.validity.tooShort);
// });

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


// POST DATA FROM REGISTRATION
const postRegFunction = (name, email, password) => {
  const regUrl = '//localhost:3131/users';
  const regPayload = {
    [name.value]: {
      id: 1,
      name: name.value,
      email: email.value,
      password: password.value
    }
  };
  const regOption = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(regPayload),
  };
  const postRegData = (name, email, password) => {
    fetch(regUrl, regOption)
      .then(function(response){
        return response.json();
      })
      .then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
        utils.inputClear(name);
        utils.inputClear(email);
        utils.inputClear(password); 
      }); 
  };   
  postRegData(name, email, password);
}


// REGISTER BUTTON 
const regButton = domElement.register.button;
regButton.addEventListener('click', (e) => {
  e.preventDefault();
  postRegFunction(regInpName, regInpEmail, regInpPassword);

  // const regUrl = '//localhost:3131/users';

  // const regPayload = {
  //   [regInpName.value]: {
  //     id: 1,
  //     name: regInpName.value,
  //     email: regInpEmail.value,
  //     password: regInpPassword.value
  //   }
  // };

  // const regOption = {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(regPayload),
  // };

  // const postRegData = () => {
  //   console.log('regPayload:');
  //   console.log(regPayload);  
  //   console.log('postRegData');
  //   console.log(regInpName.value);
  //   fetch(regUrl, regOption)
  //     .then(function(response){
  //       return response.json();
  //     })
  //     .then(function(parsedResponse){
  //       console.log('parsedResponse', parsedResponse);
  //       utils.inputClear(regInpName);
  //       utils.inputClear(regInpEmail);
  //       utils.inputClear(regInpPassword); 
  //     }); 
  // };
  
  // postRegData();

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
    
});

// {
//   // POST DATA FROM REGISTRATION
//   const regUrl = '//localhost:3131/users';

//   const regPayload = {
//     [testValue]: {
//       id: 1,
//       name: testValue,
//       email: regInpEmail.value,
//       password:  regInpPassword.value
//     }
//   };

//   const regOption = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(regPayload),
//   };

//   const postRegData = () => {
//     console.log('regPayload:');
//     console.log(regPayload);  
//     console.log('postRegData');
//     console.log(regInpName.value);
//     console.log('testValue:');
//     console.log(testValue);
//     fetch(regUrl, regOption)
//       .then(function(response){
//         return response.json();
//       })
//       .then(function(parsedResponse){
//         console.log('parsedResponse', parsedResponse);
//         //utils.inputClear(regInpName); 
//       }); 
//   };
// }