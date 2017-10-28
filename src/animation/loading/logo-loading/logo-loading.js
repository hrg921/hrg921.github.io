/**
 * Created by hangeonho on 2017. 10. 18..
 * File name : logo-loading
 * File type : JavaScript
 * File purpose : play logo-loading animation
 * Status : developing for v1.0
 */
import logoImage from './logo-loading.html';
import './logo-loading.scss';

const playLetterOutAnimation = (logoContainerElement) => {
  return new Promise((resolve, reject) => {
    logoContainerElement.animate([
      { transform: 'translateX(0)' },
      { transform: 'translateX(-80vw)' }
    ], {
      duration: 1000,
      easing: 'ease-out'
    }).finished.then(() => {
      logoContainerElement.innerHTML = logoImage;
      resolve(logoContainerElement);
    });
  });
};

const playLogoInAnimation = (logoContainerElement) => {
  const logoElement = logoContainerElement.childNodes[0];
  logoElement.style = 'display:block';

  return new Promise((resolve, reject) => {
    logoElement.animate([
      { transform: 'translateX(80vw)' },
      { transform: 'translateX(0)' }
    ], {
      duration: 1000,
      easing: 'ease-out'
    }).finished.then(() => resolve(logoElement));
  });
};

const playLogoLoadingAnimation = (logoElement) => {
  playLetterOutAnimation(logoElement)
    .then(playLogoInAnimation);
};

export default playLogoLoadingAnimation;
