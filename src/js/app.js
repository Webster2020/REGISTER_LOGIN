'use strict';

import {domElement} from './settings.js';
import {utils} from './utils.js';
import {postRegData, getLogData} from './fetchData.js';
import {setCloseModalWays} from './modal.js';

// >> REGISTRATION <<
// INPUTS
const regInpName = domElement.register.input.name;
const regInpEmail = domElement.register.input.email;
const regInpPassword = domElement.register.input.password;
// BUTTON 
const regButton = domElement.register.button;

// >> LOGIN <<
// INPUTS
const logInpName = domElement.login.input.name;
const logInpPassword = domElement.login.input.password;
// LOGIN BUTTON
const logButton = domElement.login.button;
// LOGOUT BUTTON
const logoutButton = domElement.user.button;

// SET ACTIONS
utils.setSwitchLogReg();
setCloseModalWays();

// REGISTRATION
regButton.addEventListener('click', e => {
  e.preventDefault();
  postRegData(regInpName, regInpEmail, regInpPassword);
});

// LOGIN
logButton.addEventListener('click', e => {
  e.preventDefault();
  getLogData(logInpName, logInpPassword);
});

//LOGOUT
logoutButton.addEventListener('click', e => {
  e.preventDefault();
  utils.logout();
});