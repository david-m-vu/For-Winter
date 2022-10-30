import React from "react";
import "./ImageList.css";
import Image from "../Image/Image.js";

class ImageList extends React.Component {
    render() {
        return (
            <div className="ImagesList">
                {this.props.images.map((image) => {
                    return <Image image={image} key={image.id} />
                })}
            </div>
        )
    }
}

export default ImageList;