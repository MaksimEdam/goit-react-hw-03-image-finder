import { toast } from "react-toastify";
import { ImSearch } from "react-icons/im";
import React, { Component } from "react";
import "react-toastify/dist/ReactToastify.css";
import s from "./Searchbar.module.css";
class Searchbar extends Component {
  state = {
    imageName: "",
  };

  handleNameChange = (event) => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.imageName.trim() === "") {
      toast.warn("Введите поисковый запрос");
      return;
    }

    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: "" });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <ImSearch style={{ marginRight: 8 }} />
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            className={s.SearchFormInput}
            type="text"
            placeholder="Search images and photos"
            value={this.state.imageName}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
