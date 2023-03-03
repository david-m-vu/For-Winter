import "./Main.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import ImagesList from "../ImageList/ImageList";
import { getImages } from "../../requests/searches";
import homeIcon from "./images/home-icon-green.png";
import Choice from "./Choice/Choice";

// temporary import
import { v4 as uuidv4 } from "uuid";

const Main = () => {
    const [images, setImages] = useState([]);
    const [isChoosing, setIsChoosing] = useState(false);
    const [numImagesToSearch, setNumImagesToSearch] = useState(10);
    
    // temporary state : will populate component with external images later
    const [imageChoices] = useState([
        { link: "https://cdn.discordapp.com/attachments/987062843780251708/1080745215863828500/IMG_8518.jpg", id: uuidv4() },
        { link: "https://cdn.discordapp.com/attachments/987062843780251708/1080737624605589514/IMG_8565.png", id: uuidv4() }
    ])

    const handleImageRangeChange = (e) => {
        setNumImagesToSearch(e.target.value);
    }

    const searchImages = async (term, start, fileTypeOption) => {
        let newImages = await getImages(term, start, numImagesToSearch, fileTypeOption);

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

    const makeChoice = (choiceID) => {
        let imageToAdd = imageChoices.find((image) => image.id === choiceID)
        
        setIsChoosing(false);
        setImages((prev) => [...prev, imageToAdd]);
    }

    const cancelChoice = () => {
        setIsChoosing(false);    
    }

    return (
        <div className="Main">
            <Link to="../"><img className="homeIcon" src={homeIcon} alt="home" /></Link>

            <div className="searchArea">
                <div id="imageRangeInput">
                    <label id="imageRangeLabel" for="numImages"># of Images to Search</label>
                    <div id="slider">
                        <p>1</p>
                        <input type="range" name="numImages" value={numImagesToSearch} defaultValue="10" min="1" max="10" step="1" onChange={handleImageRangeChange}/>
                        <p>10</p>
                    </div>
                </div>
                <SearchBar searchImages={searchImages} onDisplayChoice={setIsChoosing}/>
            </div>
            <ImagesList onDelete={deleteImage} images={images} />

            {isChoosing && <div className="choices">
                <Choice className="choice" imageChoices={imageChoices} onMakeChoice={makeChoice} onCancel={cancelChoice}/>
                <div className="overlay"></div>
            </div>}
        </div>
    )
}

export default Main;