import BottomTabsContainer from './components/BottomTabsContainer';
import GameGrid from './components/GameGrid';
import Header from './components/Header';
import ModalMenu from './components/ModalMenu';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { generateGameElements, updateTimer } from './store/gameSlice';

function App() {
  const isModalVisible = useSelector((state) => state.modalMenu.isVisible);
  const gameStarted = useSelector((state) => state.game.gameStarted);

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
      {isModalVisible && <ModalMenu />}
      <Header />
      <GameGrid />
      <BottomTabsContainer />
    </div>
  );
}

export default App;
