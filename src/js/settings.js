export const select = {
  switchIcons: '.login-icon i',
  register: {
    wrapper: '.form-register',
    icon: '.form-register .login-icon i',
    input: {
      wrapper: '.form-register .input-wrapper',
      name: '.form-register .input-name',
    },
    button: '.button-register',
  },
  login: {
    wrapper: '.form-login',
    icon: '.form-login .login-icon i',
    input: {
      wrapper: '.form-login .input-wrapper',
      name: '.form-login .input-name',
    },
    button: '.button-login',
  },
  overlay: '.overlay',
  modalsAll: '.overlay > *',
  modal: {
    regConfirm: {
      id: '#registration-confirm',
      titleText: '#registration-confirm .modal-title-text',
      infoText: '#registration-confirm .modal-info-text',
    },
    regHandlebars: {
      title: '#template-modal-reg-title',
      info: '#template-modal-reg-info',
    },
    closeButtons: '.overlay .close-modal'
  },
};


export const classNames = {
  formWrappers: {
    active: 'active',
  },
  overlay: {
    show: 'show',
  },
  modal: {
    show: 'show',
  }
};


export const domElement = {
  switchLogRegButtons: document.querySelectorAll(select.switchIcons),
  register: {
    wrapper: document.querySelector(select.register.wrapper),
    input: {
      name: document.querySelector(select.register.input.name),
    },
    button: document.querySelector(select.register.button),
  },
  login: {
    wrapper: document.querySelector(select.login.wrapper),
    input: {
      name: document.querySelector(select.login.input.name),
    },
    button: document.querySelector(select.login.button),
  },
  overlay: document.querySelector(select.overlay),
  modal: {
    closeButtons: document.querySelectorAll(select.modal.closeButtons),
    regHandlebars: {
      title: document.querySelector(select.modal.regHandlebars.title).innerHTML,
      info: document.querySelector(select.modal.regHandlebars.info).innerHTML,
    },
    regConfirm: {
      titleText: document.querySelector(select.modal.regConfirm.titleText),
      infoText: document.querySelector(select.modal.regConfirm.infoText),
    },
  },
  modalsAll: document.querySelectorAll(select.modalsAll), 
};