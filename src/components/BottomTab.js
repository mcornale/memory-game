const BottomTab = (props) => {
  return (
    <div className='bottom-tab'>
      <p>{props.children}</p>
      <h2>{props.value}</h2>
    </div>
  );
};

export default BottomTab;
