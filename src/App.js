import BottomTabsContainer from './components/BottomTabsContainer';
import GameGrid from './components/GameGrid';
import Header from './components/Header';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';
import GameMenuContainer from './components/GameMenuContainer';
import GameWinModal from './components/GameWinModal';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { generateGameElements, updateTimer } from './store/gameSlice';

function App() {
  const isModalVisible = useSelector((state) => state.modalMenu.isVisible);
  const gameStarted = useSelector((state) => state.game.gameStarted);
  const isGameFinished = useSelector((state) => state.game.isGameFinished);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(generateGameElements());
    const timer = setInterval(() => {
      dispatch(updateTimer());
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [gameStarted, dispatch]);

  return (
    <div className='game-container'>
      {isModalVisible && (
        <Modal>
          <Backdrop type='dark' />
          <GameMenuContainer />
        </Modal>
      )}
      {isGameFinished && (
        <Modal>
          <Backdrop type='light' />
          <GameWinModal />
        </Modal>
      )}
      <Header />
      <GameGrid />
      <BottomTabsContainer />
    </div>
  );
}

export default App;
