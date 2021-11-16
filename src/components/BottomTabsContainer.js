import BottomTab from './BottomTab';

const BottomTabsContainer = () => {
  const numOfPlayers = 4;

  const tabElements = [];

  for (let i = 0; i < numOfPlayers; i++) {
    tabElements.push(
      <BottomTab key={i} score={0}>{`Player ${i + 1}`}</BottomTab>
    );
  }

  return <div className='bottom-tabs-container'>{tabElements}</div>;
};

export default BottomTabsContainer;
