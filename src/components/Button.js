import styles from '../styles/Button.module.css';

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${styles.button} ${styles[`button-${props.type}`]} ${
        props.showOnlyOn ? styles[`button-${props.showOnlyOn}`] : ''
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
