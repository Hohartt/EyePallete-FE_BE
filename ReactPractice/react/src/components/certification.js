import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../css/certification.module.css";

function Certification() {
  return (
    <div className={styles.Certification}>
      <Container fluid>
        <Row>
          <Col lg={2}></Col>
          <Col lg={8}>
            <h3 className={styles.confirm}>정보확인 및 인증</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>출금계좌</th>
                  <th>입금계좌(은행)</th>
                  <th>받는분</th>
                  <th>이체금액(원)</th>
                  <th>수수료(원)</th>
                  <th>받는통장메모</th>
                  <th>내통장메모</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>110-406-827-822(신한)</td>
                  <td>홍길동</td>
                  <td>1000</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </Table>
            <div className={styles.box}></div>
            <Button className={styles.executebutton} variant="primary">
              <Link to="/transfercomplete">이체실행</Link>
            </Button>{" "}
            <Button className={styles.canclebutton} variant="primary">
              <Link to="/">취소</Link>
            </Button>{" "}
          </Col>
          <Col lg={2}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Certification;
