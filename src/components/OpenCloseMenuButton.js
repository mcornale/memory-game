import Button from './Button';
import { useDispatch } from 'react-redux';
import { toggleModalMenuVisibility } from '../store/modalsSlice';

const OpenCloseMenuButton = (props) => {
  const dispatch = useDispatch();

  const openMenuModalHandler = () => {
    dispatch(toggleModalMenuVisibility());
  };

  return (
    <>
      <Button
        onClick={openMenuModalHandler}
        type={props.type}
        showOnlyOn={'mobile'}
      >
        {props.children}
      </Button>
    </>
  );
};

export default OpenCloseMenuButton;
