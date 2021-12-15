import axios from "axios";
import Searchbar from "../Searchbar";
import React, { Component } from "react";
import ImageGallery from "../ImageGallery";
import Button from "../Button";
import Spinner from "../Spinner";
import s from "./App.module.css";

class App extends Component {
  state = {
    imageName: "",
    loading: false,
    items: [],
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.imageName;
    const nextName = this.state.imageName;

    if (prevName !== nextName || prevState.page !== this.state.page) {
      this.setState({ loading: true });
      axios
        .get(
          `https://pixabay.com/api/?q=${nextName}&page=${this.state.page}&key=18992166-123806360f211761da038f5eb&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then((result) => {
          this.setState((prevState) => ({
            items: [...prevState.items, ...result.data.hits],
          }));
        })
        .finally(() => this.setState({ loading: false }));
    }
  }

  handleFormSubmit = (imageName) => {
    this.setState({ imageName });
  };

  onBtnClick = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  render() {
    const { items } = this.state;
    return (
      <div className={s.App}>
        {this.state.loading && <Spinner />}
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery items={items} />
        {this.state.items.length > 0 && <Button onBtnClick={this.onBtnClick} />}
      </div>
    );
  }
}
export default App;
