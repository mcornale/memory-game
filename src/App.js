import { useEffect, useRef, useState } from 'react';
import BottomTabsContainer from './components/BottomTabsContainer';
import GameGrid from './components/GameGrid';
import Header from './components/Header';
import ModalMenu from './components/ModalMenu';
import { useDispatch } from 'react-redux';
import { updateTimer, restartGame } from './store/gameSinglePlayerSlice';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const dispatch = useDispatch();
  let timer = useRef();

  useEffect(() => {
    if (!isModalVisible) {
      timer.current = setInterval(() => {
        dispatch(updateTimer());
      }, 1000);
    } else {
      clearInterval(timer.current);
      dispatch(restartGame());
    }
  }, [isModalVisible, dispatch]);

  const changeModalVisibilityHandler = () => {
    setIsModalVisible((prevModalVisibility) => !prevModalVisibility);
  };

  return (
    <div className='game-container'>
      {isModalVisible && (
        <ModalMenu onGameStart={changeModalVisibilityHandler} />
      )}
      <Header onNewGame={changeModalVisibilityHandler} />
      <GameGrid />
      <BottomTabsContainer />
    </div>
  );
}

export default App;
