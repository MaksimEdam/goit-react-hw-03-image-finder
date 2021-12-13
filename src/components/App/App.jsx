import axios from "axios";
import Searchbar from "../Searchbar/Searchbar";
import s from "./App.module.css";

import React, { Component } from "react";

import ImageGallery from "../ImageGallery/ImageGallery";

class App extends Component {
  state = {
    items: [],
  };
  componentDidMount() {
    axios
      .get(
        "https://pixabay.com/api/?q=красотки&page=1&key=18992166-123806360f211761da038f5eb&image_type=photo&orientation=horizontal&per_page=12"
      )
      .then((result) => {
        this.setState({ items: result.data.hits });
      });
  }

  render() {
    const { items } = this.state;
    return (
      <div className={s.App}>
        <Searchbar />
        <ImageGallery items={items} />
      </div>
    );
  }
}
export default App;
