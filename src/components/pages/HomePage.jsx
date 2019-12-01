import React, { Component } from "react";
import "./homePage.css";
import MainNav from "../navigation/MainNav";
import { Row } from "reactstrap";
import AlbumsList from "./AlbumsList";

class HomePage extends Component {
  render() {
    return (
      <div className="main-content">
        <MainNav />

        <h1 className="text-white ml-3 my-3">#THROWBACKTHURSDAY</h1>
        <Row className="ml-3 my-3">
          <AlbumsList search="laura pausini" />
        </Row>
        <h1 className="text-white ml-3">CLASSIFICHE</h1>
        <Row className="ml-3 my-3">
          <AlbumsList search="akon" />
        </Row>
      </div>
    );
  }
}

export default HomePage;
