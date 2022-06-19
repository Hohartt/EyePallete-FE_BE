import { Container, Row, Col, Nav, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/event.module.css';


function Event() {
  return (
    <div className={styles.Event}>
      <Container fluid>
        <Row className={styles.contentTop}>

          <Col lg={12} className={styles.eventpage}>
            <h2 className={styles.event}>이벤트</h2>

            <Nav fill className={styles.nav} variant="pills" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link href="/OngoingEvent" active>진행중인 이벤트</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Eventfinishedpage" active>종료된 이벤트</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Winnerannouncementpage" active>당첨자 발표</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

        </Row>

        <Row className={styles.contentMiddle}>
          <Col lg={1}></Col>
          <Col lg={10}>
            <h3 className={styles.eventName}>아시안게임 응원하고 치킨먹자!</h3>

            <div className={styles.box}>

            </div>

            <Button className={styles.listbutton} variant="primary" size="lg" >
              <Link to="/OngoingEvent">목록</Link>
            </Button>
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Event;






















