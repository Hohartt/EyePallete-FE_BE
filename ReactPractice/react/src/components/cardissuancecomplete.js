import {Container, Row, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/cardissuancecomplete.module.css';


function Cardissuancecomplete() {
    return (
    <div className={styles.Event}>
        <Container fluid>
            <Row>
                <Col sm={2}></Col>
                    <Col sm={8}>
                        <img className={styles.checkimage}
                            src="img/check.png"
                            alt="checkimage"
                        />
                        <h1 className={styles.completemessage}>카드발급이 완료되었습니다.</h1>
                        <Button className={styles.checkbutton} variant="primary">
                            <Link to="/">확인</Link>
                        </Button>{' '}
                    </Col>
                <Col sm={2}></Col>
            </Row>
        </Container>
    </div>
);
}

export default Cardissuancecomplete;






















