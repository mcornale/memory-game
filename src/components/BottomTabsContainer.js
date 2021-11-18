import BottomTab from './BottomTab';
import { MAX_NUM_OF_PLAYERS } from '../constants';
import { useSelector } from 'react-redux';

const BottomTabsContainer = () => {
  const minutesElapsed = useSelector(
    (state) => state.gameSinglePlayer.minutesElapsed
  );
  const secondsElapsed = useSelector(
    (state) => state.gameSinglePlayer.secondsElapsed
  );
  const moves = useSelector((state) => state.gameSinglePlayer.moves);
  const tabElements = [];

  const generateBottomTabs = () => {
    if (MAX_NUM_OF_PLAYERS === 1) {
      tabElements.push(
        <BottomTab
          value={`${minutesElapsed}:${secondsElapsed
            .toString()
            .padStart(2, '0')}`}
        >{`Time`}</BottomTab>
      );
      tabElements.push(<BottomTab value={moves}>{`Moves`}</BottomTab>);
    } else {
      for (let i = 0; i < MAX_NUM_OF_PLAYERS; i++) {
        tabElements.push(
          <BottomTab key={i} value={0}>{`Player ${i + 1}`}</BottomTab>
        );
      }
    }
  };

  generateBottomTabs();

  return <div className='bottom-tabs-container'>{tabElements}</div>;
};

export default BottomTabsContainer;
