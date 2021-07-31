import {domElement} from './settings.js';
import {utils} from './utils.js';

export const genModRegTitle = (input) => {
  const tempModalRegTitle = domElement.modal.regHandlebars.title;
  const dataModalRegTitle = {
    greetingMessage: (input.value != '' ? `Hello ${input.value} !` : 'Hello Stranger. Put correct name please!'),
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
    notification: (input.value != '' ? 'registration reject!' : 'registration reject!'),
  };
  const targetModalRegInfo = domElement.modal.regReject.infoText;
  utils.addTextToTemp(tempModalRegInfo, dataModalRegInfo, targetModalRegInfo);
};