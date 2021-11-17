const GameButton = (props) => {
  return (
    <div className='game-button-container'>
      <button className='game-button-cover'></button>
      <button className='game-button'>{props.children}</button>
    </div>
  );
};

export default GameButton;
