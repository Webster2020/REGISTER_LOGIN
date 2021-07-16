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