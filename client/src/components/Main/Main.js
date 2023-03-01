import "./Main.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import ImagesList from "../ImageList/ImageList";
import { getImages } from "../../requests/searches";
import homeIcon from "./home-icon-green.png";

const Main = () => {
    const [images, setImages] = useState([]);

    const searchImages = async (term, start, imagesToSearch, fileTypeOption) => {
        let newImages = await getImages(term, start, imagesToSearch, fileTypeOption);

        if (newImages) {
            setImages((prev) => [...prev, ...newImages]);
        }
    }

    const rerender = () => {
        setImages((prev) => [...prev]);
    }

    return (
        <div className="Main">
            <Link to="../"><img className="homeIcon" src={homeIcon} alt="home"/></Link>
            <div className="searchArea">
                <SearchBar searchImages={searchImages} />
                <ImagesList images={images} rerender={rerender}/>
            </div>  
            {/* <p>NOTE: "Any image" search sometimes returns empty images</p>
            <p>Limit is 200 images</p> */}
        </div>
    )
}

export default Main;