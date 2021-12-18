//import axios from "axios";
import Searchbar from "../Searchbar";
import React, { Component } from "react";
import ImageGallery from "../ImageGallery";
import Button from "../Button";
import Spinner from "../Spinner";
import s from "./App.module.css";
import imagesApi from "../../services/imagesApi";

class App extends Component {
  state = {
    imageName: "",
    loading: false,
    items: [],
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.imageName;
    const nextName = this.state.imageName;

    if (prevName !== nextName || prevState.page !== this.state.page) {
      this.setState({ loading: true });

      try {
        const result = await imagesApi(nextName, this.state.page);
        this.setState((prevState) => ({
          items: [...prevState.items, ...result.hits],
        }));
      } catch (e) {
        console.error(e);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleFormSubmit = (imageName) => {
    this.setState({ imageName });
    this.setState({ items: [] });
    this.setState({ page: 1 });
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
