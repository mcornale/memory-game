import styles from '../styles/GameInfo.module.css';

const GameInfo = (props) => {
  return (
    <div
      className={`${styles['game-info']} ${
        styles[`${props.isActive ? 'game-info--active' : ''}`]
      } ${styles[`${props.isWinner ? 'game-info--winner' : ''}`]}`}
    >
      <p>{props.textOnMobile}</p>
      <p>
        {props.children} {props.isWinner ? '(Winner)' : ''}
      </p>
      <h2 className={`${styles['game-info__title']}`}>
        {props.value} {props.showMovesString ? 'Moves' : ''}{' '}
        {props.showPairsString ? 'Pairs' : ''}{' '}
      </h2>
    </div>
  );
};

export default GameInfo;
