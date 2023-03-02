import "./Choice.css";
import hitomi1 from "./hitomi1.jpg";
import hitomi2 from "./hitomi2.png";

const Choice = () => {
    return (
        <div className="Choice">
            <img src={hitomi1} alt="first choice" />
            <img src={hitomi2} alt="second choice" />
        </div>
    )
}

export default Choice;