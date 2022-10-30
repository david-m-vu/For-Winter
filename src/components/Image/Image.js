import React from "react";
import "./Image.css";

class Image extends React.Component {
    render() {
        return (
            <div className="Image">
                <div className="image-container">
                    <a rel="noopener noreferrer" href={this.props.image.image.contextLink} target="_blank">
                        <img src={this.props.image.link} alt="" />
                    </a>
                </div>
            </div>
        )
    }
}

export default Image;