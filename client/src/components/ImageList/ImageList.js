import React from "react";
import "./ImageList.css";
import Image from "../Image/Image.js";

const ImageList = (props) => {
    return (
        <div className="ImagesList">
            {props.images.map((image) => {
                return <Image image={image} key={image.id} />
            })}
        </div>
    )
}

export default ImageList;