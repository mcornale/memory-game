import styles from '../styles/GameButton.module.css';

const GameButton = (props) => {
  return (
    <div
      className={`${styles['game-button']}`}
      {...(!props.isVisible ? { onClick: props.onMoveMade } : {})}
    >
      <button
        className={`${styles['game-button__cover']} ${
          props.isVisible ? styles['game-button__cover--hidden'] : ''
        }`}
      ></button>
      <div
        className={`${styles['game-button__content']}  ${
          props.isActive ? styles['game-button__content--active'] : ''
        }`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default GameButton;
