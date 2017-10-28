/**
 * Created by hangeonho on 2017. 10. 18..
 * File name : type-name-remove
 * File type : JavaScript
 * File purpose : pause type-name's cursor animation and delete cursor element
 * Status : completed for v1.0
 */
import AnimationUtil from '../../animation-util';

const removeTypeNameAnimation = (typeNameAnimation) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      typeNameAnimation.cursor.animation.pause(); // pause cursor animation
      AnimationUtil
        .deleteAnimationElement(typeNameAnimation.cursor.element); // delete cursor element
      resolve(typeNameAnimation.typed.el);
    }, 1500);
  });
};

export default removeTypeNameAnimation;
