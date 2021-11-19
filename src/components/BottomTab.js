const BottomTab = (props) => {
  return (
    <div className={`bottom-tab ${props.isActive ? 'bottom-tab--active' : ''}`}>
      <p>{props.children}</p>
      <h2>{props.value}</h2>
    </div>
  );
};

export default BottomTab;
