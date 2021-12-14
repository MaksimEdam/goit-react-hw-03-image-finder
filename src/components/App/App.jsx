import axios from "axios";
import Searchbar from "../Searchbar/Searchbar";
import s from "./App.module.css";
import React, { Component } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";

class App extends Component {
  myRef = React.createRef();
  state = {
    imageName: "",
    loading: false,
    items: [],
    page: 1,
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
    if (prevName !== nextName || prevState.page !== this.state.page) {
      this.setState({ loading: true });
      axios
        .get(
          `https://pixabay.com/api/?q=${nextName}&page=${this.state.page}&key=18992166-123806360f211761da038f5eb&image_type=photo&orientation=horizontal&per_page=12`
        )
        /* .then((result) => {
          this.setState({ items: result.data.hits }); */
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
    this.setState({ items: [] });
    this.myRef.current.scrollIntoView();
  };
  onBtnClick = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };
  render() {
    const { items } = this.state;
    return (
      <div className={s.App} ref={this.myRef}>
        {this.state.loading && <h2>Loading...</h2>}
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery items={items} />
        {this.state.items.length > 0 && <Button onBtnClick={this.onBtnClick} />}
      </div>
    );
  }
}
export default App;
