import './App.css';
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImagesList from "../ImageList/ImageList";
import { getImages } from "../../requests/searches";

// const tempImages = [
//   {link: "https://media.tenor.com/H7LuMYCKXdAAAAAd/aespa-winter.gif", id: 1},
//   {link: "https://media.tenor.com/paA47Pk-d4UAAAAC/aespa-winter-aespa.gif", id: 2},
//   {link: "https://c.tenor.com/kloxhMkEU_gAAAAd/winter-aespa.gif", id: 3},
//   {link: "https://media.tenor.com/ZCcdT9baRBIAAAAd/winter-aespa.gif", id: 4},
//   {link: "https://media.tenor.com/FZ1gH4Y3FgoAAAAC/winter-aespa-winter-aespa-girls.gif", id: 5}
// ]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };

    this.searchImages = this.searchImages.bind(this);
    this.rerender = this.rerender.bind(this);
  }

  async searchImages(term, start, imagesToSearch, fileTypeOption) {
    let newImages = await getImages(term, start, imagesToSearch, fileTypeOption);

    if (newImages) {
      let allImages = this.state.images;
      for (let i = 0; i < newImages.length; i++) {
        allImages.push(newImages[i]);
      }
  
      this.setState({
        images: allImages
      });
    }
  }

  rerender() {
    this.setState({});
  }
  
  render() {
    return (
      <div className="App">
        <div className="title">
          <h1>D A S I M A</h1>
        </div>
        <SearchBar searchImages={this.searchImages} rerender={this.rerender}/>
        <ImagesList images={this.state.images} />
        <p>NOTE: "Any image" search sometimes returns empty images</p>
        <p>Limit is 200 images</p>
      </div>
    );
  }
}

export default App;
