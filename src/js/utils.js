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
};