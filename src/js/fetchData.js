import {utils} from './utils.js';
import {
  genModRegInfo, 
  genModRegTitle, 
  genModRegRejectTitle, 
  genModRegRejectInfo,
  genModLogInfo,
  genModLogTitle,
  genModLogRejectTitle,
  genModLogRejectInfo,
  genUserName,
  genUserEmail,
  genAsideBarUsers
} from './genTemp.js';
import {select} from './settings.js';


export const postRegData = (name, email, password) => {
  const regUrl = '//localhost:3131/users';
  let duplicatedUsers = 0;

  const checkData = () => {
    fetch(regUrl) 
      .then(function(response) {
        return response.json();
      })
      .then(function(parsedResponse) {
        parsedResponse.forEach(el => {
          el.name === name.value && duplicatedUsers++;
        });
      })
      .then(function() {
        if (duplicatedUsers < 1) {

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
              .then(function() {
                utils.inputClear(name);
                utils.inputClear(email);
                utils.inputClear(password); 
              }); 
          };   

          fetchInputData(name, email, password);
          utils.openModal(select.modal.regConfirm.id);
          genModRegTitle(name);
          genModRegInfo(name);

        } else {

          utils.openModal(select.modal.regReject.id);
          genModRegRejectTitle(name);
          genModRegRejectInfo(name);

        }
      });
  };

  checkData();

};


export const getLogData = (name, password) => {
  const logUrl = '//localhost:3131/users';

  const getData = () => {
    fetch(logUrl) 
      .then(function(response) {
        return response.json();
      })
      .then(function(parsedResponse) {

        let loginConfirm = false;
        let email = '';

        const users = [];

        for(let el of parsedResponse) {
          (el.name === name.value && el.password === password.value) && (loginConfirm = true);
          (el.name === name.value && el.password === password.value) && (email = el.email);
        }

        if (loginConfirm) {

          for(let el of parsedResponse) {
            if(el.name !== name.value) {
              users.push({
                name: el.name,
                email: el.email
              });
            }
          }

          utils.openModal(select.modal.logConfirm.id);
          genModLogTitle(name);
          genModLogInfo(name);
          genUserName(name);
          genUserEmail(email);
          utils.userShow();
          utils.inputClear(name);
          utils.inputClear(password);
          genAsideBarUsers(users);
          //TO DO 31.08.2021
          utils.getAsideBarUsersDom();

          users.length = 0;
          
        } else {    

          utils.openModal(select.modal.logReject.id);
          genModLogRejectTitle(name);
          genModLogRejectInfo(name);
          utils.inputClear(name);
          utils.inputClear(password);

        }

      });
  };

  getData();

};