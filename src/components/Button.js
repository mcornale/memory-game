import styles from '../styles/Button.module.css';

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${styles.button} ${styles[`button-${props.type}`]}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
