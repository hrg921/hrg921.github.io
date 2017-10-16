/**
 * Created by hangeonho on 2017. 10. 16..
 * File name :
 * File type : JavaScript
 * File purpose :
 * Status :
 */
import './type-name.scss';

import Typed from 'typed.js';
import AnimationUtil from '../../animation-util';

const options = {
  strings: ["Gun Hooooo", "Nope", "G-eo-n Ho", "GeonHo Han!"],
  typeSpeed: 100,
  startDelay: 50,
  backSpeed: 50,
  backDelay: 50
};

const playTypeNameAnimation = () => {
  const divElement = AnimationUtil.createAnimationElement();
  const spanElement = AnimationUtil.createAnimationElement({ parent: divElement, type: 'span' });
  divElement.classList.add('type-name');
  spanElement.classList.add('type-name');

  return new Promise((resolve, reject) => {
    const typed = new Typed('span.type-name', options);
    const cursorElement = document.querySelector('.typed-cursor');
    cursorElement.animate([
      { offset: 0, opacity: 1 },
      { offset: 0.5, opacity: 0.0 },
      { offset: 1, opacity: 1 }
    ], {
      duration: 700,
      iterations: Infinity
    });
    typed.onComplete = () => resolve();
  });
};

export default { playTypeNameAnimation };