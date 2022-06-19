import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import styles from "../css/CreateAccount_2.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useEffect } from 'react';
import Axios from 'axios';


const CreateAccount_2 = () => {

  const [inputPw, setInputPw] = React.useState('');

  const handleInputPw = (e) => {
    setInputPw(e.target.value)
  }

  const onKeyPress = (e) => {
    if (e.key == 'Enter') {
      onClickCreate();
    }
  }

  const onClickCreate = () => {
    if (inputPw.length === 0) {
      alert('계좌 비밀번호를 입력해주세요')
      console.log('프론트 오류처리')
    }

    else if (inputPw.length !== 6) {
      alert('계좌 비밀번호는 숫자 6자리로 구성되어야 합니다')
      console.log('프론트 오류처리')
    }

    else {
      Axios.post('users/accounts/add', {
        "accountPassword": inputPw,
        "loginId": sessionStorage.getItem('loginId')
      }
      )
        .then(res => {
          if (res.data.checker === true)
            document.location.href = '/CreateAccount_3page'
          else
            alert(res.data.message)
        })

        .catch()
    }
  }




  return (
    <div>
      <Row>
        <div className={styles.ca_2_text}>계좌 생성</div>
      </Row>
      {/* <Row>
        <Col lg={1}></Col>
        <Col lg={3}>
          <div className={styles.ca_2_ntext}>계좌 번호</div>
        </Col>
        <Col lg={4}>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control
                className={styles.ca_2_form}
                type="email"
                placeholder="-를 제외하고 입력하세요."
              />
            </Form.Group>
          </Form>
        </Col>
      </Row> */}

      <Row>
        <Col lg={1}></Col>
        <Col lg={3}>
          <div className={styles.ca_2_ntext}>계좌 비밀번호</div>
        </Col>
        <Col lg={4}>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control
                className={styles.ca_2_form}
                type="password"
                placeholder=""
                onChange={handleInputPw}
              />
              <Form.Text className={styles.pwrule} muted>
                숫자 6자리를 입력해주세요
              </Form.Text>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Button variant="primary" className={styles.ca_2_button} onClick={onClickCreate}>
          확인
        </Button>{" "}
      </Row>
    </div>
  );
};

export default CreateAccount_2;
