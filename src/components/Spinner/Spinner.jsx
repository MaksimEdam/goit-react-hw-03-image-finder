import Loader from "react-loader-spinner";
import React, { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from "./Spinner.module.css";

export default class Spinner extends Component {
  render() {
    return (
      <Loader
        className={s.loader}
        type="BallTriangle"
        color="#00BFFF"
        height={150}
        width={150}
        timeout={1000}
      />
    );
  }
}
