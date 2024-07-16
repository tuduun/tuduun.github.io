import React from 'react';
import Lottie from 'react-lottie-player';
import animationData from '../lotties/person-coding.json';  // Make sure the path is correct

const PreloadedLottie = () => {
  return (
    <div>
      <Lottie animationData={animationData} play style={{ width: '85%', height: 'auto' }} />
    </div>
  );
};

export default PreloadedLottie;
