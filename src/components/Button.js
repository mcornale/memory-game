const Button = (props) => {
  return (
    <button className={`button button-${props.type}`}>{props.children}</button>
  );
};

export default Button;
