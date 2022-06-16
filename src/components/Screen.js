import "./Screen.css"

export default function Screen({value,sum}) {


    return (
        <div>
        <form className="screen">
            <label >{value}</label>
        </form>
        <form className="screen2">
            <label>{sum}</label>
        </form>
        </div>
    );
}