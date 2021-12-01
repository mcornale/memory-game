import styles from '../styles/GameInfo.module.css';

const GameInfo = (props) => {
  return (
    <div
      className={`${styles['game-info']} ${
        styles[`${props.isActive ? 'game-info--active' : ''}`]
      } ${styles[`${props.isWinner ? 'game-info--winner' : ''}`]}`}
    >
      <p>
        <span
          className={
            props.children.startsWith('Player')
              ? `${styles['game-info__player--long']}`
              : ''
          }
        >
          {props.children}
        </span>
        {props.playerShortText && (
          <span className={`${styles['game-info__player--short']}`}>
            {props.playerShortText}
          </span>
        )}{' '}
        {props.isWinner ? '(Winner)' : ''}
      </p>

      <h2 className={`${styles['game-info__title']}`}>
        {props.value} {props.showMovesString ? 'Moves' : ''}{' '}
        {props.showPairsString
          ? (() => {
              if (props.value > 1) return 'Pairs';
              else return 'Pair';
            })()
          : ''}
      </h2>
    </div>
  );
};

export default GameInfo;
