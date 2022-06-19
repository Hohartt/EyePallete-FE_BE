import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/temporarypasswordguide.module.css';
import Findpassword from './findpassword';
import React, { useEffect } from 'react';



function Temporarypasswordguide() {

    // const tempPassword = this.props.location.props.tempPassword
    const location = useLocation()

    return (
        <div className={styles.Temporarypasswordguide}>
            <Container fluid>
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6}>
                        <h2 className={styles.temporarypasswordguide}>임시 비밀번호 안내</h2>
                        <h4 className={styles.loginnotice}>다음 비밀번호로 로그인하셔서 비밀번호 변경 후 정상적으로 이용이 가능합니다.</h4>
                        <Row>
                            <Col lg={6}>
                                <h4 className={styles.temporarypassword}>임시 비밀번호: </h4>
                            </Col>
                            <Col lg={6}>
                                <h4 className={styles.temporarypasswordvalue}>{location.state}</h4>
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

export default Temporarypasswordguide;






















