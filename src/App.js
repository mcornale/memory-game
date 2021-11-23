import GameGrid from './components/GameGrid';
import Header from './components/Header';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';
import Logo from './components/Logo';
import GameSettingsMenu from './components/GameSettingsMenu';
import ModalWindow from './components/ModalWindow';
import GameInfoContainer from './components/GameInfoContainer';
import GameEndInfo from './components/GameEndInfo';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { generateGameElements, updateTimer } from './store/gameSlice';
import RestartGameButton from './components/RestartGameButton';
import StartNewGameButton from './components/StartNewGameButton';
import OpenCloseMenuButton from './components/OpenCloseMenuButton';

function App() {
  const isModalMenuSettingsVisible = useSelector(
    (state) => state.modals.isModalMenuSettingsVisible
  );
  const isModalGameEndVisible = useSelector(
    (state) => state.modals.isModalGameEndVisible
  );
  const isModalMenuVisible = useSelector(
    (state) => state.modals.isModalMenuVisible
  );
  const gameStarted = useSelector((state) => state.game.gameStarted);
  const isGameFinished = useSelector((state) => state.game.isGameFinished);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isGameFinished || isModalMenuVisible) return;

    dispatch(generateGameElements());
    const timer = setInterval(() => {
      dispatch(updateTimer());
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [gameStarted, isGameFinished, isModalMenuVisible, dispatch]);

  return (
    <>
      {isModalMenuSettingsVisible && (
        <Modal>
          <Backdrop type='dark' />
          <Logo color='#fcfcfc' />
          <ModalWindow>
            <GameSettingsMenu />
          </ModalWindow>
        </Modal>
      )}
      {isModalGameEndVisible && (
        <Modal>
          <Backdrop type='light' />
          <ModalWindow>
            <GameEndInfo />
          </ModalWindow>
        </Modal>
      )}
      {isModalMenuVisible && (
        <Modal>
          <Backdrop type='light' />
          <ModalWindow>
            <RestartGameButton type='primary'>Restart</RestartGameButton>
            <StartNewGameButton type='secondary'>New Game</StartNewGameButton>
            <OpenCloseMenuButton type='secondary'>
              Resume Game
            </OpenCloseMenuButton>
          </ModalWindow>
        </Modal>
      )}
      <Header />
      <GameGrid />
      <GameInfoContainer layout='horizontal' />
    </>
  );
}

export default App;
