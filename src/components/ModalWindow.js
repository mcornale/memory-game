import styles from '../styles/ModalWindow.module.css';

const ModalWindow = (props) => {
  return <div className={styles['modal-window']}>{props.children}</div>;
};

export default ModalWindow;
