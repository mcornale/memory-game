const GameButton = (props) => {
  return (
    <button
      onClick={!props.isVisible && props.onMoveMade}
      className={`game-button game-button--${
        props.isVisible ? 'visible' : 'hidden'
      } game-button--${props.isActive ? 'active' : 'inactive'}`}
    >
      {props.children}
    </button>
  );
};

export default GameButton;
