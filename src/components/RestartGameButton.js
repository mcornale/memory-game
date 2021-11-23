import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { startNewGame } from '../store/gameSlice';
import {
  toggleModalGameEndVisibility,
  toggleModalMenuVisibility,
} from '../store/modalsSlice';

const RestartGameButton = (props) => {
  const dispatch = useDispatch();
  const isModalGameEndVisible = useSelector(
    (state) => state.modals.isModalGameEndVisible
  );
  const isModalMenuVisible = useSelector(
    (state) => state.modals.isModalMenuVisible
  );

  const gameRestartHandler = () => {
    if (isModalGameEndVisible) dispatch(toggleModalGameEndVisibility());
    if (isModalMenuVisible) dispatch(toggleModalMenuVisibility());

    dispatch(startNewGame());
  };

  return (
    <>
      <Button onClick={gameRestartHandler} type={props.type}>
        {props.children}
      </Button>
    </>
  );
};

export default RestartGameButton;
