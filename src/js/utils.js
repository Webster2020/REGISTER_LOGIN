'use strict';

import {classNames, domElement} from './settings.js';

export const utils = {
  closeModal: () => {
    domElement.overlay.classList.remove(classNames.overlay.show);
  },
  openModal: (modalId) => {
    domElement.modalsAll.forEach((modalId) => {
      modalId.classList.remove(classNames.modal.show);
    });
    domElement.overlay.classList.add(classNames.modal.show);
    document.querySelector(modalId).classList.add(classNames.modal.show);
  },
  addTextToTemp: (tempDomElem, content, targetDomElem) => {
    const tempContentSetter = Handlebars.compile(tempDomElem);
    const generatedHTML = tempContentSetter(content);
    targetDomElem.innerHTML = generatedHTML;
  },
  inputClear: (input) => {
    input.value = '';
  },
  setSwitchLogReg: () => {
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
  },
  userShow: () => {
    const formWrapperAll = domElement.formWrapperAll;
    const userWrapper = domElement.user.wrapper;
    for(const formWrapper of formWrapperAll) {
      if(formWrapper.classList.contains(classNames.formWrappers.active)) {
        formWrapper.classList.remove(classNames.formWrappers.active);
      }
    }
    userWrapper.classList.add(classNames.formWrappers.active);
  },
  logout: () => {
    const userWrapper = domElement.user.wrapper;
    const logForm = domElement.login.wrapper;
    userWrapper.classList.remove(classNames.formWrappers.active);
    logForm.classList.add(classNames.formWrappers.active);
  }
};