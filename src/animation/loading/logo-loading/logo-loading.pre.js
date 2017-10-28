/**
 * Created by hangeonho on 2017. 10. 22..
 * File name : logo-loading.pre
 * File type : JavaScript
 * File purpose : play pre-logo-loading animation
 * Status : completed for v1.0
 */
import './logo-loading.scss';

const playPreLogoLoadingAnimation = (typeNameElement) => {
  return new Promise((resolve, reject) => {
    typeNameElement.animate([
      {transform: 'scale(1)'},
      {transform: 'scale(7)'}
    ], {
      duration: 1000,
      easing: 'ease-out'
    }).finished.then(() => {
      typeNameElement.classList.remove('type-name');
      typeNameElement.parentNode.classList.remove('type-name');
      typeNameElement.parentNode.classList.add('pre-logo-loading');
      resolve(typeNameElement);
    });
  });
};

export default playPreLogoLoadingAnimation;
