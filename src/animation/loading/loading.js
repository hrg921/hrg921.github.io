/**
 * Created by hangeonho on 2017. 10. 16..
 * File name : loading
 * File type : JavaScript
 * File purpose : combine loading animation pieces
 * Status : complete for v0.0.1
 */
import FadeIn from './fade-in';

const loading = () => {
  const fadeInAnimation = FadeIn.playFadeInAnimation();

  fadeInAnimation.finished.then(fadeInAnimation.remove);
};

export default loading;