/**
 * Created by hangeonho on 2017. 9. 27..
 * File name : fade-in
 * File type : JavaScript
 * File purpose : loadingAnimation - fadeIn Animation
 * Status : completed for v0.0.1
 */
import './fade-in.scss';

import AnimationUtil from '../../animation-util';

const createAndPlayAnimation = (element) => {
  return element.animate([
    {background: '#fff'},
    {background: 'rgb(51, 51, 51)'}
  ], 1000);
};

const playFadeInAnimation = () => {
  const loadingElement = AnimationUtil.createAnimationElement();
  loadingElement.classList.add('fade-in');
  const loadingAnimation = createAndPlayAnimation(loadingElement);
  return { finished: loadingAnimation.finished, remove: () => AnimationUtil.deleteAnimationElement(loadingElement) };
};

export default { playFadeInAnimation };
