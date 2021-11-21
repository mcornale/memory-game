import styles from '../styles/GameInfo.module.css';

const GameInfo = (props) => {
  return (
    <div
      className={`${styles['game-info']} ${
        styles[`${props.isActive ? 'game-info--active' : ''}`]
      }`}
    >
      <p>{props.children}</p>
      <h2 className={`${styles['game-info__title']}`}>
        {props.value} {props.showMovesString ? 'Moves' : ''}
      </h2>
    </div>
  );
};

export default GameInfo;
