import { Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import styles from "../css/Quicksearch.module.css";

const Quicksearch = () => {
  return (
    <Row>
      <Row>
        <div className={styles.qs_text}>빠른거래내역</div>
      </Row>
      <Row>
        <div className={styles.qs_text2}>10건의 조회내역이 있습니다. </div>
      </Row>
      <Row>
        <Col lg={6}>
          <ul className={styles.nobullet}>
            <li>계좌번호 : 356-0027-5834-73</li>
          </ul>
        </Col>
        <Col lg={6}>
          <ul className={styles.nobullet}>
            <li> 예금주 : 홍길동 </li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <ul className={styles.nobullet}>
            <li>상명예금</li>
          </ul>
        </Col>

        <Col lg={6}>
          <ul className={styles.nobullet}>
            <li>잔액 : 2000원</li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>거래일자</th>
              <th>거래시간</th>
              <th>적요</th>
              <th>출금(원)</th>
              <th>입금(원)</th>
              <th>내용(입금자명)</th>
              <th>잔액(원)</th>
              <th>거래점</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2022-02-16</td>
              <td>10:00:03</td>
              <td>타행출금</td>
              <td>출금(원)</td>
              <td>입금(원)</td>
              <td>내용(입금자명)</td>
              <td>잔액(원)</td>
              <td>대기1</td>
            </tr>
            <tr>
              <td>--</td>
              <td>--</td>
              <td>--</td>

              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>--</td>
              <td>--</td>
              <td>--</td>

              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>--</td>
              <td>--</td>
              <td>--</td>

              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>--</td>
              <td>--</td>
              <td>--</td>

              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>--</td>
              <td>--</td>
              <td>--</td>

              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>--</td>
              <td>--</td>
              <td>--</td>

              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>--</td>
              <td>--</td>
              <td>--</td>

              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>--</td>
              <td>--</td>
              <td>--</td>

              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>--</td>
              <td>--</td>
              <td>--</td>

              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Row>
  );
};

export default Quicksearch;
