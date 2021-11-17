const Button = (props) => {
  return (
    <button onClick={props.onClick} className={`button button-${props.type}`}>
      {props.children}
    </button>
  );
};

export default Button;
