import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";

const Album = ({ albums }) => {
  return (
    <div>
      <Card style={{ background: "transparent" }}>
        <Link to={`/comments/${albums.album.id}`}>
          <CardImg
            top
            width="100%"
            src={albums.album.cover_medium}
            alt="Card image cap"
          />
        </Link>
        <CardBody>
          <Link to={`/album/${albums.album.id}`}>
            {" "}
            <CardTitle  className="text-white">ALBUM: {albums.album.title}</CardTitle>
          </Link>
          <Link to={`artist/${albums.artist.id}`}>
            {" "}
            <CardText  className="text-white">ARTIST: {albums.artist.name}</CardText>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default Album;
