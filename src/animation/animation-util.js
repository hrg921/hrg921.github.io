/**
 * Created by hangeonho on 2017. 10. 16..
 * File name : animation-util
 * File type : JavaScript
 * File purpose : dom control functions
 * Status : developing for v1.0
 */
const body = document.querySelector('body');

const createAnimationElement = (options = { parent: body, type: 'div' }) => {
  const element = document.createElement(options.type);
  options.parent.appendChild(element);

  return element;
};

const deleteAnimationElement = (element) => {
  element.parentNode.removeChild(element);
  return new Promise((resolve, reject) => resolve());
};

export default { createAnimationElement, deleteAnimationElement };
