import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import ImageGallery from "../ImageGallery";
import Searchbar from "../Searchbar";
import Button from "../Button";
import Spinner from "../Spinner";
import imagesApi from "../../services/imagesApi";
import s from "./App.module.css";

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
        if (!this.state.items.length) {
          toast.error("фото отсутствует");
        }
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
        <ToastContainer theme="colored" />
      </div>
    );
  }
}
export default App;
