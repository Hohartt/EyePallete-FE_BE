import { Router, Route, Routes, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import styles from "../css/Product.module.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Product = () => {
  return (
    <Row>
      <div className={styles.pd_text}>당신에게 추천합니다. </div>
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col>
            <Card className={styles.p_card}>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>상품</Card.Title>
                <Card.Text>상품</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <div className={styles.pd_text}>원하는 상품이 없나요?</div>
      </Row>
      <Row>
        <Col>
          <Button variant="secondary">상품1</Button>{" "}
        </Col>

        <Col>
          <Button variant="secondary">상품2</Button>{" "}
        </Col>
        <Col>
          <Button variant="secondary">상품3</Button>{" "}
        </Col>
        <Col>
          <Button variant="secondary">상품4</Button>{" "}
        </Col>
        <Col>
          <Button variant="secondary">상품5</Button>{" "}
        </Col>
        <Col>
          <Button variant="secondary">상품6</Button>{" "}
        </Col>
      </Row>
    </Row>
  );
};

export default Product;
