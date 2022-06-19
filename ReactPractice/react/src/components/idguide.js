import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/idguide.module.css';


function Idguide() {
    return (
        <div className={styles.Idguide}>
            <Container fluid>
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6}>
                        <h2 className={styles.idguide}>아이디 안내</h2>
                        <h4 className={styles.loginnotice}>다음 아이디로 로그인하시면 정상적으로 이용이 가능합니다.</h4>
                        <Row>
                            <Col lg={6}>
                                <h4 className={styles.id}>아이디: </h4>  
                            </Col>        
                            <Col lg={6}>
                                <h4 className={styles.idvalue}>sdfdsh246424 </h4>  
                            </Col>        
                        </Row>    
                        <Button className={styles.loginbutton} variant="primary" size="lg">
                            <Link to="/login">로그인 하러가기</Link>
                        </Button>
                    </Col>
                    <Col lg={3}></Col>

                </Row>
            </Container>
        </div>
    );
}

export default Idguide;






















