import {utils} from './utils.js';
import {genModRegInfo, genModRegTitle, genModRegRejectTitle, genModRegRejectInfo} from './genTemp.js';
import {select} from './settings.js';

export const postRegData = (name, email, password) => {
  const regUrl = '//localhost:3131/users';
  let userExist = 0;

  const checkData = () => {
    fetch(regUrl) 
      .then(function(response) {
        return response.json();
      })
      .then(function(parsedResponse) {
        parsedResponse.forEach(el => {
          el.name === name.value && userExist++;
        });
      })
      .then(function() {
        if (userExist < 1) {
          const regPayload = {
            name: name.value,
            email: email.value,
            password: password.value
          };
          const regOption = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(regPayload),
          };
          const fetchInputData = (name, email, password) => {
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
          console.log('CONFIRM: New user added!');
          fetchInputData(name, email, password);

          utils.openModal(select.modal.regConfirm.id);
          genModRegTitle(name);
          genModRegInfo(name);

        } else {
          console.log('REJECT: User exist!');

          utils.openModal(select.modal.regReject.id);
          genModRegRejectTitle(name);
          genModRegRejectInfo(name);
        }
      });
  };
  checkData();

  // const regPayload = {
  //   name: name.value,
  //   email: email.value,
  //   password: password.value
  // };
  // const regOption = {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(regPayload),
  // };
  // const fetchInputData = (name, email, password) => {
  //   fetch(regUrl, regOption)
  //     .then(function(response){
  //       return response.json();
  //     })
  //     .then(function(parsedResponse){
  //       console.log('parsedResponse', parsedResponse);
  //       utils.inputClear(name);
  //       utils.inputClear(email);
  //       utils.inputClear(password); 
  //     }); 
  // };   
  // fetchInputData(name, email, password);

};

// IN PROGRESS...
export const getLogData = (name, password) => {
  console.log(name.value);
  console.log(password.value);

  const logUrl = '//localhost:3131/users';

  const getData = () => {
    fetch(logUrl) 
      .then(function(response) {
        return response.json();
      })
      .then(function(parsedResponse) {
        console.log('parsedResponse', parsedResponse);
        parsedResponse.forEach(el => {
          console.log(el);
          el.name === name.value && el.password === password.value ? console.log('Login confirm!') : console.log('Wrong name or password!');
        });
      })
      .then(function() {
        utils.inputClear(name);
        utils.inputClear(password);
      });
  };
  getData();
};


// >>>> TO REMOVE AT THE END OF TYPING THIS APP !!!
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




// // POST DATA FROM REGISTRATION
// const postRegFunction = (name, email, password) => {
//   const regUrl = '//localhost:3131/users';
//   const regPayload = {
//     [name.value]: {
//       id: 1,
//       name: name.value,
//       email: email.value,
//       password: password.value
//     }
//   };
//   const regOption = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(regPayload),
//   };
//   const postRegData = (name, email, password) => {
//     fetch(regUrl, regOption)
//       .then(function(response){
//         return response.json();
//       })
//       .then(function(parsedResponse){
//         console.log('parsedResponse', parsedResponse);
//         utils.inputClear(name);
//         utils.inputClear(email);
//         utils.inputClear(password); 
//       }); 
//   };   
//   postRegData(name, email, password);
// }


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


