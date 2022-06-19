import {Container, Row, Col, Button, Table} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/loancomplete.module.css';

function Loancomplete() {
    return (
      <div className={styles.Loancomplete}>
        <Container fluid>
            <Row>
                <Col lg={2}></Col>
                <Col lg={8}>
                    <h3 className={styles.complete}>대출완료</h3>

                    <Table className={styles.completetable} striped bordered hover>
                    <thead>
                        <tr>
                        <th>거래일자</th>
                        <th>대출종류</th>
                        <th>대출금액</th>
                        <th>금리</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>2022-03-16</td>
                        <td>상명 신용대출</td>
                        <td>1억원</td>
                        <td>3.7%</td>
                        </tr>
                    </tbody>
                    </Table>

                    <Button className={styles.checkbutton} variant="primary">
                        <Link to = "/">확인</Link>
                    </Button>{' '}
                </Col>
                <Col lg={2}></Col>


            </Row>
        </Container>
      </div>
    );
  }
  
  export default Loancomplete;