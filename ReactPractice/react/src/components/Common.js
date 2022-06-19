import styles from "../css/Common.module.css";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Common = () => {
  return (
    <div>
      <Row>
        <Col>
          <div className={styles.c_text}>수신상품 금리 변경</div>
        </Col>
        <Col>
          <div className={styles.c_d_text}>2022-03-25</div>
        </Col>
      </Row>
      <Row>
        <div className={styles.m_text}>
          <Row></Row>

          <Row></Row>
        </div>
      </Row>
      <Row>
        <Button variant="primary" className={styles.c_button1}>
          목록
        </Button>{" "}
      </Row>
    </div>
  );
};

export default Common;
