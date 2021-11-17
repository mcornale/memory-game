import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';
import GameMenuContainer from './GameMenuContainer';

const ModalMenu = (props) => {
  return ReactDOM.createPortal(
    <>
      <Backdrop />
      <GameMenuContainer onGameStart={props.onGameStart} />
    </>,
    document.getElementById('root')
  );
};

export default ModalMenu;