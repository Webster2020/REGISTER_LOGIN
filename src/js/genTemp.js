import {domElement} from './settings.js';
import {utils} from './utils.js';

//REGISTRATION
export const genModRegTitle = (input) => {
  const tempModalRegTitle = domElement.modal.regHandlebars.title;
  const dataModalRegTitle = {
    greetingMessage: (input.value != '' ? `User '${input.value}' added!` : 'Hello Stranger. Put correct name please!'),
  };
  const targetModalRegTitle = domElement.modal.regConfirm.titleText;
  utils.addTextToTemp(tempModalRegTitle, dataModalRegTitle, targetModalRegTitle);
}; 

export const genModRegInfo = (input) => {
  const tempModalRegInfo = domElement.modal.regHandlebars.info;
  const dataModalRegInfo = {
    notification: (input.value != '' ? 'registration confirm!' : 'registration reject!'),
  };
  const targetModalRegInfo = domElement.modal.regConfirm.infoText;
  utils.addTextToTemp(tempModalRegInfo, dataModalRegInfo, targetModalRegInfo);
};

export const genModRegRejectTitle = (input) => {
  const tempModalRegTitle = domElement.modal.regHandlebars.titleReject;
  const dataModalRegTitle = {
    rejectMessage: (input.value != '' ? `Sorry, user '${input.value}' already exit !` : 'Hello Stranger. Put correct name please!'),
  };
  const targetModalRegTitle = domElement.modal.regReject.titleText;
  utils.addTextToTemp(tempModalRegTitle, dataModalRegTitle, targetModalRegTitle);
}; 

export const genModRegRejectInfo = (input) => {
  const tempModalRegInfo = domElement.modal.regHandlebars.infoReject;
  const dataModalRegInfo = {
    rejectNotification: (input.value != '' ? 'registration reject!' : 'registration reject!'),
  };
  const targetModalRegInfo = domElement.modal.regReject.infoText;
  utils.addTextToTemp(tempModalRegInfo, dataModalRegInfo, targetModalRegInfo);
};

//LOGIN
export const genModLogTitle = (input) => {
  const tempModalLogTitle = domElement.modal.logHandlebars.title;
  const dataModalLogTitle = {
    greetingMessage: (input.value != '' ? `Hello ${input.value} !` : 'Hello Stranger. Put correct name please!'),
  };
  const targetModalLogTitle = domElement.modal.logConfirm.titleText;
  utils.addTextToTemp(tempModalLogTitle, dataModalLogTitle, targetModalLogTitle);
}; 

export const genModLogInfo = (input) => {
  const tempModalLogInfo = domElement.modal.logHandlebars.info;
  const dataModalLogInfo = {
    notification: (input.value != '' ? 'login confirm!' : 'login reject!'),
  };
  const targetModalLogInfo = domElement.modal.logConfirm.infoText;
  utils.addTextToTemp(tempModalLogInfo, dataModalLogInfo, targetModalLogInfo);
};

export const genModLogRejectTitle = (input) => {
  const tempModalLogTitle = domElement.modal.logHandlebars.titleReject;
  const dataModalLogTitle = {
    rejectMessage: (input.value != '' ? `Wrong name or password!` : 'Hello Stranger. Put correct name please!'),
  };
  const targetModalLogTitle = domElement.modal.logReject.titleText;
  utils.addTextToTemp(tempModalLogTitle, dataModalLogTitle, targetModalLogTitle);
}; 

export const genModLogRejectInfo = (input) => {
  const tempModalLogInfo = domElement.modal.logHandlebars.infoReject;
  const dataModalLogInfo = {
    rejectNotification: (input.value != '' ? 'login reject!' : 'login reject!'),
  };
  const targetModalLogInfo = domElement.modal.logReject.infoText;
  utils.addTextToTemp(tempModalLogInfo, dataModalLogInfo, targetModalLogInfo);
};

//USER
export const genUserName = (name) => {
  const tempUserName = domElement.user.handlebars.name;
  const dataUserName = {
    userName: (name.value != '' ? name.value : 'error'),
  };
  const targetUserName = domElement.user.name;
  utils.addTextToTemp(tempUserName, dataUserName, targetUserName);
};

export const genUserEmail = (email) => {
  const tempUserEmail = domElement.user.handlebars.email;
  const dataUserEmail = {
    userEmail: (email != '' ? email : 'error'),
  };
  const targetUserEmail = domElement.user.email;
  utils.addTextToTemp(tempUserEmail, dataUserEmail, targetUserEmail);
};

//ASIDE-BAR //new 24.08.2021
export const genAsideBarUsers = (users) => {
  const tempUsers = domElement.users.handlebars.innerHTML;
  const dataUsers = {
    person: [
      ...users
    ]
  };
  const targetUsers = domElement.users.wrapper;
  utils.addListElemToTemp(tempUsers, dataUsers, targetUsers);
};