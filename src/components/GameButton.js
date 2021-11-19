const GameButton = (props) => {
  return (
    <button
      className='game-button'
      {...(!props.isVisible ? { onClick: props.onMoveMade } : {})}
    >
      <div
        className={`game-button__cover game-button__cover--${
          props.isVisible ? 'hidden' : 'visible'
        }`}
      ></div>
      <div
        className={`game-button__content  ${
          props.isActive ? 'game-button__content--active' : ''
        }`}
      >
        {props.children}
      </div>
    </button>
  );
};

export default GameButton;
