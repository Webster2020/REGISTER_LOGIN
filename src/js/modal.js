import {domElement} from './settings.js';
import {utils} from './utils.js';

export const setCloseModalWays = () => {

  const overlay = domElement.overlay;
  const closeButtons = domElement.modal.closeButtons;

  document.addEventListener('keyup', (e) => {
    if(e.keyCode === 27) {
      utils.closeModal();
    }
  });

  overlay.addEventListener('click', function(e) {
    if(e.target === this) {
      utils.closeModal();
    }
  });

  closeButtons.forEach(function(button) {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      utils.closeModal();
    });
  });

};