export const select = {
  switchIcons: '.login-icon i',
  formWrapperAll: '.form-wrapper',
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
      //email: '.form-login .input-email',
      password: '.form-login .input-password',
    },
    button: '.button-login',
  },
  user: {
    wrapper: '.form-user',
    icon: '.form-user .user-icon i',
    name: '.form-user .user-name-text',
    email: '.form-user .user-email-text',
    button: '.button-logout',
    handlebars: {
      name: '#template-user-name',
      email: '#template-user-email',
    }
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
    logConfirm: {
      id: '#login-confirm',
      titleText: '#login-confirm .modal-title-text',
      infoText: '#login-confirm .modal-info-text',
    },
    logReject: {
      id: '#login-reject',
      titleText: '#login-reject .modal-title-text',
      infoText: '#login-reject .modal-info-text',
    },
    regHandlebars: {
      title: '#template-modal-reg-title',
      info: '#template-modal-reg-info',
      titleReject: '#template-modal-reg-reject-title',
      infoReject: '#template-modal-reg-reject-info',
    },
    logHandlebars: {
      title: '#template-modal-log-title',
      info: '#template-modal-log-info',
      titleReject: '#template-modal-log-reject-title',
      infoReject: '#template-modal-log-reject-info',
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
  formWrapperAll: document.querySelectorAll(select.formWrapperAll),
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
      //email: document.querySelector(select.login.input.email),
      password: document.querySelector(select.login.input.password),
    },
    button: document.querySelector(select.login.button),
  },
  user: {
    wrapper: document.querySelector(select.user.wrapper),
    icon: document.querySelector(select.user.icon),
    name: document.querySelector(select.user.name),
    email: document.querySelector(select.user.email),
    button: document.querySelector(select.login.button),
    handlebars: {
      name: document.querySelector(select.user.handlebars.name).innerHTML,
      email: document.querySelector(select.user.handlebars.email).innerHTML,
    }
  },
  overlay: document.querySelector(select.overlay),
  modal: {
    closeButtons: document.querySelectorAll(select.modal.closeButtons),
    regConfirm: {
      titleText: document.querySelector(select.modal.regConfirm.titleText),
      infoText: document.querySelector(select.modal.regConfirm.infoText),
    },
    regReject: {
      titleText: document.querySelector(select.modal.regReject.titleText),
      infoText: document.querySelector(select.modal.regReject.infoText),
    },
    logConfirm: {
      titleText: document.querySelector(select.modal.logConfirm.titleText),
      infoText: document.querySelector(select.modal.logConfirm.infoText),
    },
    logReject: {
      titleText: document.querySelector(select.modal.logReject.titleText),
      infoText: document.querySelector(select.modal.logReject.infoText),
    },
    regHandlebars: {
      title: document.querySelector(select.modal.regHandlebars.title).innerHTML,
      info: document.querySelector(select.modal.regHandlebars.info).innerHTML,
      titleReject: document.querySelector(select.modal.regHandlebars.titleReject).innerHTML,
      infoReject: document.querySelector(select.modal.regHandlebars.infoReject).innerHTML,
    },
    logHandlebars: {
      title: document.querySelector(select.modal.logHandlebars.title).innerHTML,
      info: document.querySelector(select.modal.logHandlebars.info).innerHTML,
      titleReject: document.querySelector(select.modal.logHandlebars.titleReject).innerHTML,
      infoReject: document.querySelector(select.modal.logHandlebars.infoReject).innerHTML,
    },
  },
  modalsAll: document.querySelectorAll(select.modalsAll), 
};