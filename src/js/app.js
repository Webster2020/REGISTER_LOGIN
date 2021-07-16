'use strict';

import {select, domElement} from './settings.js';
import {utils} from './utils.js';
import {postRegData} from './fetchData.js';
import {genModRegInfo, genModRegTitle} from './genTemp.js';
import {setCloseModalWays} from './modal.js';

// INPUTS
const regInpName = domElement.register.input.name;
const regInpEmail = domElement.register.input.email;
const regInpPassword = domElement.register.input.password;
// REGISTRATION BUTTON 
const regButton = domElement.register.button;

// SET ACTIONS
utils.setSwitchLogReg();
setCloseModalWays();

// EVENT REGISTRATION
regButton.addEventListener('click', (e) => {
  e.preventDefault();

  postRegData(regInpName, regInpEmail, regInpPassword);

  utils.openModal(select.modal.regConfirm.id);

  genModRegTitle(regInpName);

  genModRegInfo(regInpName);
});

// regInpName.addEventListener('input', (e) => {
//   console.log(e.target.value);
//   console.log(regInpName.validity.tooShort);
// });