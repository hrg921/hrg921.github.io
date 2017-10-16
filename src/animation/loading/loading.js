/**
 * Created by hangeonho on 2017. 10. 16..
 * File name : loading
 * File type : JavaScript
 * File purpose : combine loading animation pieces
 * Status : complete for v0.0.1
 */
import FadeIn from './fade-in';
import TypeName from './type-name';

const loading = () => {
  const fadeInAnimation = FadeIn.playFadeInAnimation();

  fadeInAnimation.finished.then(fadeInAnimation.remove)
    .then(TypeName.playTypeNameAnimation);
};

export default loading;