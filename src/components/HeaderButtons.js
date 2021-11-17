import Button from './Button';

const HeaderButtons = (props) => {
  return (
    <div className='header-buttons'>
      <Button type='primary'>Restart</Button>
      <Button onClick={props.onNewGame} type='secondary'>
        New Game
      </Button>
    </div>
  );
};

export default HeaderButtons;
