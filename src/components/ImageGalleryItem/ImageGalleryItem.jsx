import { Component } from "react";
import Modal from "../Modal";
import s from "./ImageGalleryItem.module.css";
export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    return (
      <li className={s.ImageGalleryItem}>
        <img
          onClick={this.toggleModal}
          className={s.ImageGalleryItemImage}
          src={this.props.webformatURL}
          alt={this.props.tags}
        />
        {this.state.showModal && (
          <Modal
            largeImageURL={this.props.largeImageURL}
            toggleModal={this.toggleModal}
            alt={this.props.tags}
          />
        )}
      </li>
    );
  }
}
