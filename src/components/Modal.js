import ReactDOM from 'react-dom';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <>{props.children}</>,
    document.getElementById('root')
  );
};

export default Modal;
