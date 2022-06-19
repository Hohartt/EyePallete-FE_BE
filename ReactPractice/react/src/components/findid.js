import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/findid.module.css';
import React, { useEffect } from 'react';


function Findid() {

    // const [inputName, setInputName] = React.useState('');
    // const [inputEmail, setInputEmail] = React.useState('');

    // const handleInputName = (e) => {
    //     setInputName(e.target.value)
    // }

    // const handleInputEmail = (e) => {
    //     setInputEmail(e.target.value)
    // }

    // const onKeyPress = (e) => {
    //     if (e.key == 'Enter') {
    //         onClickFind();
    //     }
    // }

    // const onClickFind = () => {
    //     Axios.post('users/login', {
    //         "loginId": inputId,
    //         "password": inputPw
    //     }
    //     )
    //         .then(res => {
    //             if (res.data.checker === true && res.data.data.usingTempPassword === false) {
    //                 sessionStorage.setItem('loginId', inputId)
    //                 document.location.href = '/'
    //             }
    //             else if (res.data.checker === true && res.data.data.usingTempPassword === true)
    //                 document.location.href = '/passwordchangepage'
    //             else
    //                 alert(res.data.message)
    //         })

    //         .catch()
    // }

    return (
        <div className={styles.Findid}>
            <Container fluid>
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6}>
                        <h2 className={styles.findid}>아이디 찾기</h2>
                        <h4 className={styles.findidnotice}>아이디는 가입시 입력하신 이름과 이메일을 통해 찾으실 수 있습니다.</h4>
                        <Form.Control className={styles.inputname} type="name" placeholder="이름" />
                        <Form.Control className={styles.inputemail} type="email" placeholder="이메일" />
                        <Button className={styles.findbutton} variant="primary" size="lg">
                            <Link to="/idguide">찾기</Link>
                        </Button>
                    </Col>
                    <Col lg={3}></Col>

                </Row>
            </Container>
        </div>
    );
}

export default Findid;






















