/**
 * Created by hangeonho on 2017. 10. 16..
 * File name : loading
 * File type : JavaScript
 * File purpose : combine loading animation pieces
 * Status : developing for v1.0
 */
import FadeIn from './fade-in';
import TypeName from './type-name';
import LogoLoading from './logo-loading';

const loading = () => {
  const fadeInAnimation = FadeIn.playFadeInAnimation();

  fadeInAnimation.finished.then(fadeInAnimation.remove)
    .then(TypeName.playTypeNameAnimation)
    .then(TypeName.removeTypeNameAnimation)
    .then(LogoLoading.playPreLogoLoadingAnimation)
    .then(LogoLoading.playLogoLoadingAnimation);
};

export default loading;
