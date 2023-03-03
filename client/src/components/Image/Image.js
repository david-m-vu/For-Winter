import React, { useState } from "react";
import "./Image.css";

const Image = (props) => {
    const [showDelete, setShowDelete] = useState(false);

    const deleteImage = () => {
        props.onDelete(props.image.id);
    }

    const renderDelete = () => {
        setShowDelete(true);
    }

    const unrenderDelete = () => {
        setShowDelete(false);
    }

    const getContextLink = () => {
        if (props.image.hasOwnProperty("image")) {
            return props.image.image.contextLink;
        } else {
            return "about:blank";
        }
    }

    return (
        <div className="Image">
            <div className="image-container" onMouseOver={renderDelete} onMouseLeave={unrenderDelete}>
                <a rel="noopener noreferrer" href={getContextLink()} target="_blank">
                    <img className="card" src={props.image.link} alt=""/>
                </a>
                {showDelete && <h1 className="closeButton" onClick={deleteImage}>✖</h1>}
            </div>
        </div>
    )
}

export default Image;