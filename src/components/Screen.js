// import { Textfit } from "react-textfit";
import "./Screen.css";

const Screen = ({ value }) => {
  return (
    <form className="screen">
        <label>{value}</label>
    </form>
  );
   
};

export default Screen;