import HeaderButtons from './HeaderButtons';
import Logo from './Logo';

const Header = (props) => {
  return (
    <header className='header'>
      <Logo color='#152938' />
      <HeaderButtons onNewGame={props.onNewGame} />
    </header>
  );
};

export default Header;
