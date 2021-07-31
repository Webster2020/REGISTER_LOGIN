export const select = {
  switchIcons: '.login-icon i',
  register: {
    wrapper: '.form-register',
    icon: '.form-register .login-icon i',
    input: {
      wrapper: '.form-register .input-wrapper',
      name: '.form-register .input-name',
      email: '.form-register .input-email',
      password: '.form-register .input-password',
    },
    button: '.button-register',
  },
  login: {
    wrapper: '.form-login',
    icon: '.form-login .login-icon i',
    input: {
      wrapper: '.form-login .input-wrapper',
      name: '.form-login .input-name',
      email: '.form-login .input-email',
      password: '.form-login .input-password',
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
    regReject: {
      id: '#registration-reject',
      titleText: '#registration-reject .modal-title-text',
      infoText: '#registration-reject .modal-info-text',
    },
    regHandlebars: {
      title: '#template-modal-reg-title',
      info: '#template-modal-reg-info',
      titleReject: '#template-modal-reg-reject-title',
      infoReject: '#template-modal-reg-reject-info',
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
      email: document.querySelector(select.register.input.email),
      password: document.querySelector(select.register.input.password),
    },
    button: document.querySelector(select.register.button),
  },
  login: {
    wrapper: document.querySelector(select.login.wrapper),
    input: {
      name: document.querySelector(select.login.input.name),
      email: document.querySelector(select.login.input.email),
      password: document.querySelector(select.login.input.password),
    },
    button: document.querySelector(select.login.button),
  },
  overlay: document.querySelector(select.overlay),
  modal: {
    closeButtons: document.querySelectorAll(select.modal.closeButtons),
    regHandlebars: {
      title: document.querySelector(select.modal.regHandlebars.title).innerHTML,
      info: document.querySelector(select.modal.regHandlebars.info).innerHTML,
      titleReject: document.querySelector(select.modal.regHandlebars.titleReject).innerHTML,
      infoReject: document.querySelector(select.modal.regHandlebars.infoReject).innerHTML,
    },
    regConfirm: {
      titleText: document.querySelector(select.modal.regConfirm.titleText),
      infoText: document.querySelector(select.modal.regConfirm.infoText),
    },
    regReject: {
      titleText: document.querySelector(select.modal.regReject.titleText),
      infoText: document.querySelector(select.modal.regReject.infoText),
    },
  },
  modalsAll: document.querySelectorAll(select.modalsAll), 
};