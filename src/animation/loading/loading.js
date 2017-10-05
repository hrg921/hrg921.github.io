/**
 * Created by hangeonho on 2017. 9. 27..
 * File name : loading
 * File type : JavaScript
 * File purpose : loadingAnimation
 * Status : completed for v0.0.1
 */
import './loading.scss';

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

const playLoadingAnimation = () => {
  const body = document.querySelector('body');
  const loadingElement = createAnimationElement(body);
  const loadingAnimation = createAndPlayAnimation(loadingElement);
  loadingAnimation.finished.then(() => deleteAnimationElement(body, loadingElement));
};

export default playLoadingAnimation;
