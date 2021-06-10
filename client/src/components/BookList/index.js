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
  thumbnail
}) {

  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            {/* <Thumbnail src={thumbnail || "https://placehold.it/300x300"} /> */}
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <p>Author: {author}</p>
            <p>Summary: {description}</p>
            <p>Author: {author}</p>
            <a rel="noreferrer noopener" target="_blank" href={href}>
              Go to Book
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}