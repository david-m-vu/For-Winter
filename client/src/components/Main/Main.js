import "./Main.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import ImagesList from "../ImageList/ImageList";
import { getImages } from "../../requests/searches";
import homeIcon from "./home-icon-green.png";
import Choice from "./Choice/Choice";

const Main = () => {
    const [images, setImages] = useState([]);

    const searchImages = async (term, start, imagesToSearch, fileTypeOption) => {
        let newImages = await getImages(term, start, imagesToSearch, fileTypeOption);

        if (newImages) {
            setImages((prev) => [...prev, ...newImages]);
        }
    }

    const deleteImage = (id) => {
        let newImages = images.filter((image) => {
            return image.id !== id;
        })
        setImages(newImages);
    }

    return (
        <div className="Main">
            <Link to="../"><img className="homeIcon" src={homeIcon} alt="home"/></Link>
            <div className="searchArea">
                <SearchBar searchImages={searchImages} />
            </div>  
            <ImagesList onDelete={deleteImage} images={images}/>            

            {/* <div className="choices">
                <Choice className="choice" />
            </div> */}
        </div>
    )
}

export default Main;