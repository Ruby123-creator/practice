const Hoc = WrappedComponent => props => {
    const style = { background: props.theme.background, color: props.theme.color };
    return (
      <div style={style}>
        <WrappedComponent {...props} />
      </div>
    );
  };

  export default Hoc;