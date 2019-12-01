import React, { Component } from "react";
import SideBar from "./navigation/SideBar";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AlbumPage from "./pages/AlbumPage";
import ArtistPage from "./pages/ArtistPage";
import ReviewPage from "./pages/ReviewPage";
import Player from "./footer/Player";

class SpotifyApp extends Component {
  render() {
    return (
      <Router>
        <div>
          <SideBar />
          <Container>
            <Route path="/" exact component={HomePage} />
            <Route path="/album/:albumId" component={AlbumPage} />
            <Route path="/artist/:artistId"  component={ArtistPage} />
            <Route path="/comments/:albumId" component={ReviewPage} />

          </Container>
          <Player />
        </div>
      </Router>
    );
  }
}

export default SpotifyApp;
