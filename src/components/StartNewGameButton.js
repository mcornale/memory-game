import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleModalGameEndVisibility,
  toggleModalMenuSettigsVisibility,
  toggleModalMenuVisibility,
} from '../store/modalsSlice';
import { setGameSettings, startNewGame } from '../store/gameSlice';

const StartNewGameButton = (props) => {
  const dispatch = useDispatch();
  const isModalGameEndVisible = useSelector(
    (state) => state.modals.isModalGameEndVisible
  );
  const isModalMenuSettingsVisible = useSelector(
    (state) => state.modals.isModalMenuSettingsVisible
  );
  const isModalMenuVisible = useSelector(
    (state) => state.modals.isModalMenuVisible
  );

  const startNewGameHandler = () => {
    if (isModalGameEndVisible) dispatch(toggleModalGameEndVisibility());
    if (isModalMenuVisible) dispatch(toggleModalMenuVisibility());

    if (isModalMenuSettingsVisible) {
      dispatch(setGameSettings(props.settingsChoice));
      dispatch(startNewGame());
    }

    dispatch(toggleModalMenuSettigsVisibility());
  };

  return (
    <>
      <Button onClick={startNewGameHandler} type={props.type}>
        {props.children}
      </Button>
    </>
  );
};

export default StartNewGameButton;
