import Lottie from 'react-lottie';

const LottieAnimation = ({ animationData }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="w-64 h-64">
      <Lottie options={defaultOptions} height="100%" width="100%" />
    </div>
  );
};

export default LottieAnimation;
