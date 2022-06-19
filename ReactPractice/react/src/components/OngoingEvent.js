import { Nav, Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../css/OngoingEvent.module.css";
import { Link } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";

const OngoingEvent = () => {
  return (
    <div className={styles.Event}>
      <Container fluid>
        <Row className={styles.contentTop}>
          <Col lg={12} className={styles.eventpage}>
            <Nav
              fill
              className={styles.nav}
              variant="pills"
              defaultActiveKey="/"
            >
              <Nav.Item>
                <Nav.Link href="/OngoingEvent" active>
                  진행중인 이벤트
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Eventfinishedpage" active>
                  종료된 이벤트
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Winnerannouncementpage" active>
                  당첨자 발표
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className={styles.og_box}>
              <Link to="/event1">-</Link>
            </div>
          </Col>
          <Col>
            <div className={styles.og_box}></div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className={styles.og_box}></div>
          </Col>
          <Col>
            <div className={styles.og_box}></div>
          </Col>
        </Row>
        <Row>
          <Pagination size="lg" className={styles.pagenav_og}>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </Row>
      </Container>
    </div>
  );
};

export default OngoingEvent;
