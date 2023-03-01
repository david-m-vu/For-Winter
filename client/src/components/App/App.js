import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import LandingPage from "../LandingPage/LandingPage";


// const tempImages = [
//   {link: "https://media.tenor.com/H7LuMYCKXdAAAAAd/aespa-winter.gif", id: 1},
//   {link: "https://media.tenor.com/paA47Pk-d4UAAAAC/aespa-winter-aespa.gif", id: 2},
//   {link: "https://c.tenor.com/kloxhMkEU_gAAAAd/winter-aespa.gif", id: 3},
//   {link: "https://media.tenor.com/ZCcdT9baRBIAAAAd/winter-aespa.gif", id: 4},
//   {link: "https://media.tenor.com/FZ1gH4Y3FgoAAAAC/winter-aespa-winter-aespa-girls.gif", id: 5}
// ]

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/main" element={<Main />} />
          </Routes>
        </Router>
      </div>

    );
  }
}

export default App;
