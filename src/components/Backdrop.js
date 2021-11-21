import styles from '../styles/Backdrop.module.css';

const Backdrop = (props) => {
  return (
    <div
      className={`${styles.backdrop} ${styles[`backdrop--${props.type}`]}`}
    ></div>
  );
};

export default Backdrop;
