import styles from '../styles/GameButton.module.css';

const GameButton = (props) => {
  return (
    <button
      className={`${styles['game-button']}`}
      {...(!props.isVisible ? { onClick: props.onMoveMade } : {})}
    >
      <div
        className={`${styles['game-button__cover']} ${
          props.isVisible ? styles['game-button__cover--hidden'] : ''
        }`}
      ></div>
      <div
        className={`${styles['game-button__content']}  ${
          props.isActive ? styles['game-button__content--active'] : ''
        }`}
      >
        {props.children}
      </div>
    </button>
  );
};

export default GameButton;
