import axios from "axios";
import Searchbar from "../Searchbar/Searchbar";
import s from "./App.module.css";
import React, { Component } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";

class App extends Component {
  state = {
    imageName: "",
    loading: false,
    items: [],
  };
  handleFormSubmit = (imageName) => {
    this.setState({ imageName });
  };
  /* 
  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(
        `https://pixabay.com/api/?q=${this.state.imageName}&page=1&key=18992166-123806360f211761da038f5eb&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then((result) => {
        this.setState({ items: result.data.hits });
      })
      .finally(() => this.setState({ loading: false }));
  } */
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.imageName;
    const nextName = this.state.imageName;
    if (prevName !== nextName) {
      this.setState({ loading: true });
      axios
        .get(
          `https://pixabay.com/api/?q=${nextName}&page=1&key=18992166-123806360f211761da038f5eb&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then((result) => {
          this.setState({ items: result.data.hits });
        })
        .finally(() => this.setState({ loading: false }));
    }
  }
  render() {
    const { items } = this.state;
    return (
      <div className={s.App}>
        {this.state.loading && <h2>Loading...</h2>}
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery items={items} />
      </div>
    );
  }
}
export default App;
