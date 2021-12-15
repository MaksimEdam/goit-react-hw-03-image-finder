import Loader from "react-loader-spinner";
import React, { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class Spinner extends Component {
  render() {
    return (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    );
  }
}
