import { useState } from 'react';
import BottomTabsContainer from './components/BottomTabsContainer';
import GameGrid from './components/GameGrid';
import Header from './components/Header';
import ModalMenu from './components/ModalMenu';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(true);

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
