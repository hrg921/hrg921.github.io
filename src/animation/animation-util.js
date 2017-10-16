/**
 * Created by hangeonho on 2017. 10. 16..
 * File name :
 * File type : JavaScript
 * File purpose :
 * Status :
 */
const body = document.querySelector('body');

const createAnimationElement = (options = { parent: body, type: 'div' }) => {
  const element = document.createElement(options.type);
  options.parent.appendChild(element);

  return element;
};

const deleteAnimationElement = (element) => {
  body.removeChild(element);
  return new Promise((resolve, reject) => resolve());
};

export default { createAnimationElement, deleteAnimationElement }