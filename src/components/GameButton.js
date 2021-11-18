import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateMoves } from '../store/gameSinglePlayerSlice';

const GameButton = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const numOfPlayers = useSelector((state) => state.gameSettings.numOfPlayers);
  const moves = useSelector((state) => state.gameSinglePlayer.moves);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    setIsVisible((prevVisibility) => !prevVisibility);
    if (numOfPlayers === 1) {
      if ((moves + 1) % 2 === 0) console.log('copri');
      dispatch(updateMoves());
    }
  };

  return (
    <button
      onClick={onClickHandler}
      className={`game-button game-button--${isVisible ? 'visible' : 'hidden'}`}
    >
      {props.children}
    </button>
  );
};

export default GameButton;
