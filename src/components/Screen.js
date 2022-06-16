import "./Screen.css"

export default function Screen({value}) {


    return (
        <form className="screen">
            <label >{value}</label>
        </form>
    );
}