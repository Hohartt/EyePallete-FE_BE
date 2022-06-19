import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import styles from "../css/CreateAccount_3.module.css";
import Button from "react-bootstrap/Button";

const CreateAccount_3 = () => {
  return (
    <div className={styles.Event}>
      <Row>
        <Col sm={2}></Col>
        <Col sm={8}>
          <img
            className={styles.ca_checkimage}
            src="img/check.png"
            alt="checkimage"
          />
          <h1 className={styles.ca_completemessage}>
            상명은행 계좌 생성이 완료되었습니다.
          </h1>
          <h4 className={styles.ca_completemessage_0}>
            회원님은 상명은행의 계좌 관련 모든 기능을 이용하실 수 있습니다.{" "}
          </h4>
          <Button className={styles.checkbutton} variant="primary">
            <Link to="/">확인</Link>
          </Button>{" "}
        </Col>
        <Col sm={2}></Col>
      </Row>
    </div>
  );
};

export default CreateAccount_3;
