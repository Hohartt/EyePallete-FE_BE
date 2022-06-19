import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import styles from "../css/CreateAccount.module.css";
import Button from "react-bootstrap/Button";

const CreateAccount = () => {
  return (
    <div>
      <Row>
        <div className={styles.ca_text}>
          회원님이 등록하신 계좌가 없습니다. 계좌를 생성 후 이용해주세요.
        </div>
      </Row>
      <Row>
        <Button variant="primary" className={styles.ca_button}>
          <Link to="/CreateAccount_2page">계좌 생성하러 가기</Link>
        </Button>{" "}
      </Row>
    </div>
  );
};

export default CreateAccount;
