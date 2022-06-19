import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/passwordchange.module.css';
import React, { useEffect } from 'react';
import Axios from 'axios';


function Passwordchange() {

  const [inputOldPw, setInputOldPw] = React.useState('');
  const [inputNewPw, setInputNewPw] = React.useState('');
  const [inputConPw, setInputConPw] = React.useState('');


  const handleInputOldPw = (e) => {
    setInputOldPw(e.target.value)
  }

  const handleInputNewPw = (e) => {
    setInputNewPw(e.target.value)
  }

  const handleInputConPw = (e) => {
    setInputConPw(e.target.value)
  }

  const onKeyPress = (e) => {
    if (e.key == 'Enter') {
      onClickChange();
    }
  }

  const onClickChange = () => {

    if (inputNewPw.length === 0 || inputConPw.length === 0 || inputOldPw.length === 0) {
      alert('비밀번호찾기 항목중 비어있는 항목이 있습니다')
      console.log('프론트 오류처리')
    }

    else if (inputNewPw !== inputConPw) {
      alert('비밀번호와 비밀번호확인이 일치하지 않습니다.')
      console.log('프론트 오류처리')
    }

    else if (!inputNewPw.match("^(?=.*[a-zA-Z])(?=.*\\d)(?=.*\\W).{8,20}$")) {
      alert('새 비밀번호의 형식이 올바르지 않습니다')
      console.log('프론트 오류처리')
    }

    else {
      Axios.post('users/updatePassword', {
        "loginId": sessionStorage.getItem('loginId'),
        "newPassword1": inputNewPw,
        "newPassword2": inputConPw,
        "oldPassword": inputOldPw
      }
      )
        .then(res => {
          if (res.data.checker === true) {
            document.location.href = '/passwordchangecomplete'
          }
          else {
            console.log(sessionStorage.getItem('loginId'), inputOldPw, inputNewPw, inputConPw)
            alert(res.data.message)
          }
        })

        .catch()
    }
  }


  return (
    <div className={styles.Passwordchange}>
      <Container fluid>
        <Row>
          <Col lg={3}></Col>
          <Col lg={6}>
            <h2 className={styles.passwordchange}>비밀번호 변경</h2>
            <Form.Control className={styles.inputoldpassword} type="password" placeholder="기존 비밀번호" onChange={handleInputOldPw}
              onKeyPress={onKeyPress} />
            <Form.Control className={styles.inputnewpassword} type="password" placeholder="새 비밀번호" onChange={handleInputNewPw}
              onKeyPress={onKeyPress} />
            <Form.Text className={styles.pwrule} muted>
              영문자, 특수문자를 포함하여 8~20자를 입력해주세요.
            </Form.Text>
            <Form.Control className={styles.inputpasswordcheck} type="password" placeholder="비밀번호 확인" onChange={handleInputConPw}
              onKeyPress={onKeyPress} />
            <Button className={styles.changebutton} variant="primary" size="lg" onClick={onClickChange}>
              변경하기
              {/* <Link to="/passwordchangecomplete">변경하기</Link> */}
            </Button>
          </Col>
          <Col lg={3}></Col>

        </Row>
      </Container>
    </div>
  );
}

export default Passwordchange;






















