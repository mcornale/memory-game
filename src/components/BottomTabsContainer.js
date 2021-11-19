import BottomTab from './BottomTab';
import { MAX_NUM_OF_PLAYERS } from '../constants';
import { useSelector } from 'react-redux';

const BottomTabsContainer = () => {
  const minutesElapsed = useSelector((state) => state.game.minutesElapsed);
  const secondsElapsed = useSelector((state) => state.game.secondsElapsed);
  const moves = useSelector((state) => state.game.moves);
  const tabElements = [];

  const generateBottomTabs = () => {
    if (MAX_NUM_OF_PLAYERS === 1) {
      tabElements.push(
        <BottomTab
          key={1}
          value={`${minutesElapsed}:${secondsElapsed
            .toString()
            .padStart(2, '0')}`}
        >{`Time`}</BottomTab>
      );
      tabElements.push(<BottomTab key={2} value={moves}>{`Moves`}</BottomTab>);
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
