import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import styles from "../css/PasswordChangeComplete.module.css";
import Button from "react-bootstrap/Button";

const PasswordChangeComplete = () => {

  const onLogout = () => {
    sessionStorage.removeItem('loginId')
    document.location.href = '/login'
  }

  return (
    <div className={styles.Event}>
      <Row>
        <Col sm={2}></Col>
        <Col sm={8}>
          <img
            className={styles.pc_checkimage}
            src="img/check.png"
            alt="checkimage"
          />
          <h1 className={styles.pc_completemessage_0}>비밀번호 변경 완료</h1>
          <h4 className={styles.pc_completemessage}>
            비밀번호가 변경되었습니다.{" "}
          </h4>
          <h4 className={styles.pc_completemessage}>
            새 비밀번호로 로그인 해주세요.{" "}
          </h4>
          <Button className={styles.pc_checkbutton} variant="primary">
            <Link to onClick={onLogout}>확인</Link>
          </Button>{" "}
        </Col>
        <Col sm={2}></Col>
      </Row>
    </div>
  );
};

export default PasswordChangeComplete;
