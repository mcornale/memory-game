import GameGrid from './components/GameGrid';
import Header from './components/Header';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';
import Logo from './components/Logo';
import GameSettingsMenu from './components/GameSettingsMenu';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { generateGameElements, updateTimer } from './store/gameSlice';
import ModalWindow from './components/ModalWindow';
import GameInfoContainer from './components/GameInfoContainer';

function App() {
  const isModalVisible = useSelector((state) => state.modalMenu.isVisible);
  const gameStarted = useSelector((state) => state.game.gameStarted);
  const isGameFinished = useSelector((state) => state.game.isGameFinished);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isGameFinished) return;

    dispatch(generateGameElements());
    const timer = setInterval(() => {
      dispatch(updateTimer());
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [gameStarted, isGameFinished, dispatch]);

  return (
    <>
      {isModalVisible && (
        <Modal>
          <Backdrop type='dark' />
          <Logo color='#fcfcfc' />
          <ModalWindow>
            <GameSettingsMenu />
          </ModalWindow>
        </Modal>
      )}
      {isGameFinished && (
        <Modal>
          <Backdrop type='light' />
          {/* <GameEndInfo /> */}
        </Modal>
      )}
      <Header />
      <GameGrid />
      <GameInfoContainer />
    </>
  );
}

export default App;
