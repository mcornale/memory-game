import styles from '../styles/Modal.module.css';

import ReactDOM from 'react-dom';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className={styles.modal}>{props.children}</div>,
    document.getElementById('root')
  );
};

export default Modal;
