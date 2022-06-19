import { Row, Col } from "react-bootstrap";
import styles from "../css/Incidentnotification.module.css";

const Incidentnotification = () => {
  return (
    <div>
      <Row>
        <Col>
          <div className={styles.c_text}>사고신고</div>
        </Col>
      </Row>
      <Row>
        <div className={styles.i_text}> 안내 </div>
      </Row>
      <Row>
        <div className={styles.m_text}>
          <Row></Row>

          <Row></Row>
        </div>
      </Row>
    </div>
  );
};

export default Incidentnotification;
