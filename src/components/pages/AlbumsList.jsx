import React, { useState, useEffect } from "react";
import {  Col } from "reactstrap";
import { getAlbums } from "../../helpers/getAlbums";
import Album from "./Album";

const AlbumsList = ({ search }) => {
  const [albums, setAlbums] = useState([]);
  const fechtAlbums = async () => {
    let reponse = await getAlbums(search);
    setAlbums(reponse.data);
  };
  useEffect(() => {
    fechtAlbums();
  }, []);
  return (
    <>
      {albums.map(item => (
        <Col md="3" key={item.id}>
          <Album albums={item} key={item.id} />
        </Col>
      ))}
    </>
  );
};

export default AlbumsList;
