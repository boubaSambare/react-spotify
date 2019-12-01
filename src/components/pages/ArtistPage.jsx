import React, { useState, useEffect } from "react";
import { getArtist } from "../../helpers/getAlbums";
import { Jumbotron, Button, Row, Col, Spinner } from "reactstrap";
import AlbumsList from "./AlbumsList";
import { is } from "@babel/types";

const ArtistPage = props => {
  const [artist, setArtist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let artistName = props.match.params.artistId;
  const fechtArtist = async () => {
    let reponse = await getArtist(artistName);
    console.log(reponse);
    setArtist(reponse);
    setIsLoading(false);
  };
  useEffect(() => {
    fechtArtist();
  }, []);
  console.log(artist.name);
  return (
    <div className="main-content">
      {isLoading && (
        <Spinner color="danger" style={{ width: "3rem", height: "3rem" }} />
      )}
      {!isLoading && artist && (
        <Row
          style={{
            backgroundImage: `url(${artist.picture_xl})`,
            backgroundSize: "cover",
            backgroundRepeat:'no-repeat'
          }}
          className="pl-4"
        >
          <Col md="3"></Col>
          <Col md="6">
            <Jumbotron style={{ background: "transparent" }}>
              <h1 className="display-3 text-white"> {artist.name}</h1>

              <p className="lead">
                <Button color="success" className="mx-2 rounded-pill ">PLAY</Button>
                <Button color="primary" className="mx-2 rounded-pill">FOLLOW</Button>
              </p>
            </Jumbotron>
          </Col>
          <Col md="3"></Col>
        </Row>
      )}
      <h1 className="text-white pl-4"> ALBUM</h1>
      <Row className="pl-4">{ artist && artist.name && <AlbumsList search={artist.name} />}</Row>
    </div>
  );
};

export default ArtistPage;
