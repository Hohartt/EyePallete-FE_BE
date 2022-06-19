import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/findpassword.module.css';
import React, { useEffect } from 'react';
import Axios from 'axios';
import Temporarypasswordguide from './temporarypasswordguide';



const Findpassword = () => {
    let tempPassword

    const navigate = useNavigate();
    const [inputAnswer, setInputAnswer] = React.useState('');
    const [inputId, setInputId] = React.useState('');
    const [selectQuestion, setSelectQuestion] = React.useState('');

    const handleInputAnswer = (e) => {
        setInputAnswer(e.target.value)
    }

    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleQustion = (e) => {
        // setSelectValue(e.target.innertext);
        setSelectQuestion(e.target.options[e.target.selectedIndex].text);
    }

    const onKeyPress = (e) => {
        if (e.key == 'Enter') {
            onClickFind();
        }
    }

    const onClickFind = () => {

        console.log(inputAnswer, inputId, selectQuestion)

        if (selectQuestion === undefined || selectQuestion === "질문을 선택해주세요")
            alert('질문을 선택해주세요')
        else {
            Axios.post('users/find_Password', {
                "ansWord": inputAnswer,
                "loginId": inputId,
                "question": selectQuestion
            }
            )
                .then(res => {
                    if (res.data.checker === true) {
                        console.log(res.data.data)
                        // console.log(res.data.data)
                        // sessionStorage.setItem('Temp_Password', res.data.data)
                        tempPassword = res.data.data
                        // document.location.href = '/temporarypasswordguide'
                        navigate(
                            '/temporarypasswordguide',
                            { state: tempPassword }
                        )
                    }
                    else {
                        // console.log(res.data)
                        alert(res.data.message)
                    }
                })

                .catch()


        }
    }





    return (

        <div className={styles.Findpassword}>

            <Container fluid>
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6}>
                        <h2 className={styles.findpassword}>비밀번호 찾기</h2>
                        <h4 className={styles.findpasswordnotice}>비밀번호는 가입시 입력하신 아이디와 질문 / 답변을 통해 찾으실 수 있습니다.</h4>
                        <Form.Control className={styles.inputid} type="id" placeholder="아이디" onChange={handleInputId} onKeyPress={onKeyPress} />
                        <Form.Select className={styles.questionlist} onChange={handleQustion} aria-label="Default select example" >
                            <option>질문을 선택해주세요</option>
                            <option value="1">질문테스트</option>
                            <option value="2">질문2</option>
                            <option value="3">질문3</option>
                        </Form.Select>
                        <Form.Control className={styles.inputanswer} type="email" placeholder="답변" onChange={handleInputAnswer} onKeyPress={onKeyPress} />
                        <Button className={styles.findbutton} variant="primary" size="lg" onClick={onClickFind}>
                            찾기

                        </Button>
                    </Col>
                    <Col lg={3}></Col>

                </Row>
            </Container>

        </div>
    );
}

export default Findpassword;






















