import Button from './Button';

const HeaderButtons = () => {
  return (
    <div className='header-buttons'>
      <Button type='primary'>Restart</Button>
      <Button type='secondary'>New Game</Button>
    </div>
  );
};

export default HeaderButtons;
