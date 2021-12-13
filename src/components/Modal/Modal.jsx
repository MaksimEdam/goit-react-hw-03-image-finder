import React, { Component } from "react";
import s from "./Modal.module.css";
export class Modal extends Component {
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
      <div className={s.Overlay}>
        <div className={s.Modal}>
          <img
            src="https://mirpozitiva.ru/wp-content/uploads/2019/11/1472042660_10.jpg"
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default Modal;
