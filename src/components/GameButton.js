import { useState } from 'react';

const GameButton = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const changeVisibilityHandler = () => {
    setIsVisible((prevVisibility) => !prevVisibility);
  };

  return (
    <button
      onClick={changeVisibilityHandler}
      className={`game-button game-button--${isVisible ? 'visible' : 'hidden'}`}
    >
      {props.children}
    </button>
  );
};

export default GameButton;
