/**
 * Created by hangeonho on 2017. 9. 27..
 * File name : fade-in
 * File type : JavaScript
 * File purpose : loadingAnimation - fadeIn Animation
 * Status : completed for v0.0.1
 */
import './fade-in.scss';

const createAnimationElement = (body) => {
  const loadingElement = document.createElement('div');
  body.appendChild(loadingElement);
  loadingElement.classList.add('loading');

  return loadingElement;
};

const deleteAnimationElement = (body, element) => {
  body.removeChild(element);
};

const createAndPlayAnimation = (element) => {
  return element.animate([
    {background: '#fff'},
    {background: 'rgb(51, 51, 51)'}
  ], 1000);
};

const playFadeInAnimation = () => {
  const body = document.querySelector('body');
  const loadingElement = createAnimationElement(body);
  const loadingAnimation = createAndPlayAnimation(loadingElement);
  return { finished: loadingAnimation.finished, remove: () => deleteAnimationElement(body, loadingElement) };
};

export default { playFadeInAnimation };
