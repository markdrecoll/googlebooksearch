import React from "react";
import { Container, Row, Col } from "../Grid";
// import Thumbnail from "../Thumbnail";
// import Jumbotron from "./Jumbotron";
// import Nav from "./Nav";
// import Input from "./Input";
// import Button from "./Button";


export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function BookListItem({
  title,
  author,
  href,
  description,
  thumbnail,
  handleSaveBook
}) {

  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <p>Author: {author}</p>
            <p>Description: {description}</p>
            <img src={thumbnail} /><br /><br />
            <a rel="noreferrer noopener" target="_blank" href={href} className="btn btn-secondary btn-sm m-1">Go to Book</a>
            <button data-title={title} onClick={handleSaveBook} className="btn btn-secondary btn-sm m-1">Save</button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}