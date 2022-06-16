import "./Wrapper.css";

export function Wrapper(props)  {
  return <div className="wrapper">{props.children}</div>;

};

export default Wrapper;