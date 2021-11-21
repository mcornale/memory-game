import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { startNewGame } from '../store/gameSlice';
import { toggleModalGameEndVisibility } from '../store/modalsSlice';

const RestartGameButton = (props) => {
  const dispatch = useDispatch();
  const isModalGameEndVisible = useSelector(
    (state) => state.modals.isModalGameEndVisible
  );

  const gameRestartHandler = () => {
    if (isModalGameEndVisible) dispatch(toggleModalGameEndVisibility());
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
