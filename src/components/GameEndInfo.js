import GameInfoContainer from './GameInfoContainer';
import RestartGameButton from './RestartGameButton';
import StartNewGameButton from './StartNewGameButton';
import {
  toggleModalGameEndVisibility,
  toggleModalMenuSettigsVisibility,
} from '../store/modalsSlice';
import { useDispatch } from 'react-redux';

const GameEndInfo = () => {
  const dispatch = useDispatch();

  const startNewGameHandler = () => {
    dispatch(toggleModalGameEndVisibility());
    dispatch(toggleModalMenuSettigsVisibility());
  };

  return (
    <div>
      <h1>You did it</h1>
      <p>Here's how you got on</p>
      <GameInfoContainer />
      <div>
        <RestartGameButton type='primary'>Restart</RestartGameButton>
        <StartNewGameButton
          onStartNewGame={startNewGameHandler}
          type='secondary'
        >
          Setup New Game
        </StartNewGameButton>
      </div>
    </div>
  );
};

export default GameEndInfo;
