import "./ButtonBox.css";

export function ButtonBox(props) {
  return <div className="buttonBox">{props.children}</div>;
};

export default ButtonBox;