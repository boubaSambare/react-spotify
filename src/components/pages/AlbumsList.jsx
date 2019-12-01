import React, { useState, useEffect } from "react";
import { Col, Spinner } from "reactstrap";
import { getAlbums } from "../../helpers/getAlbums";
import Album from "./Album";

const AlbumsList = ({ search }) => {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fechtAlbums = async () => {
    let reponse = await getAlbums(search);
    setAlbums(reponse.data);
    setIsLoading(false);
  };
  useEffect(() => {
    fechtAlbums();
  }, []);
  return (
    <>
      {isLoading && (
        <Spinner color="danger" style={{ width: "3rem", height: "3rem" }} />
      )}
      {albums.map(item => (
        <Col md="3" key={item.id}>
          <Album albums={item} key={item.id} />
        </Col>
      ))}
    </>
  );
};

export default AlbumsList;
