import { Container, Row, Col, Nav, Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/login.module.css';
import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import Axios from 'axios';
import { findAllByTestId } from '@testing-library/react';




function Login() {

  const [inputId, setInputId] = React.useState('');
  const [inputPw, setInputPw] = React.useState('');

  const handleInputId = (e) => {
    setInputId(e.target.value)
  }

  const handleInputPw = (e) => {
    setInputPw(e.target.value)
  }

  const onKeyPress = (e) => {
    if (e.key == 'Enter') {
      onClickLogin();
    }
  }

  const onClickLogin = () => {
    Axios.post('/users/login',{
      "loginId": inputId,
      "password": inputPw
    }
    )
      .then(res => {
        if (res.data.checker === true && res.data.data.usingTempPassword === false) {
          sessionStorage.setItem('loginId', inputId)
          document.location.href = '/'
        }
        else if (res.data.checker === true && res.data.data.usingTempPassword === true) {
          sessionStorage.setItem('Password', inputPw)
          sessionStorage.setItem('loginId', inputId)
          document.location.href = '/passwordchange'
        }
        else
          alert(res.data.message)
      })

      .catch()
  }

  return (
    <div className={styles.Login}>
      <Container fluid>
        <Row className={styles.topcontent}>
          <Col lg={3}></Col>
          <Col lg={6} className={styles.loginpage}>
            <Nav fill variant="pills" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link href="/home">아이디/비밀번호</Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link eventKey="link-1">공백</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">공백</Nav.Link>
              </Nav.Item> */}
            </Nav>
            <div className={styles.divideline}></div>

          </Col>
          <Col lg={3}></Col>
        </Row>

        <Row className={styles.middlecontent}>
          <Col lg={3}></Col>
          <Col lg={5}>
            <Form.Control
              className={styles.idform}
              type="id"
              placeholder="아이디를 입력해주세요"
              onChange={handleInputId}
              onKeyPress={onKeyPress}
            />
            <Form.Control
              className={styles.passwordform}
              type="password"
              placeholder="비밀번호를 입력해주세요"
              aria-describedby="passwordHelpBlock"
              onChange={handleInputPw}
              onKeyPress={onKeyPress}
            />
          </Col>
          <Col lg={1}>
            <Button className={styles.loginbutton} variant="primary" size="lg" onClick={onClickLogin}>
              로그인
            </Button>
          </Col>
          <Col lg={3}></Col>

        </Row>
        <Row className={styles.bottomcontent}>
          <Col lg={4}></Col>
          <Col lg={1}>
            <div className={styles.signup}>
              <Link to='/signup'>회원가입</Link>
            </div>
          </Col>
          <Col lg={2}>
            <div className={styles.findid}>
              <Link to='/findid'>아이디찾기</Link>
            </div>
          </Col>
          <Col lg={1}>
            <div className={styles.findpassword}>
              <Link to='/findpassword'>비밀번호찾기</Link>
            </div>
          </Col>
          <Col lg={4}></Col>



        </Row>
      </Container>
    </div>
  );
}

export default Login;






















