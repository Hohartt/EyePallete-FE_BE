import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../css/selectAccount.module.css";
import { Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';
import Axios from 'axios';
import Transfer from './transfer';

function SelectAccount() {

    const [info2, setInfo2] = React.useState([]);
    const navigate = useNavigate();
    let accountNumber

    useEffect(() => {
        Axios.get('/users/accounts/inquiry',
            { params: { userId: sessionStorage.getItem('loginId') } }
        )
            .then(res => setInfo2(res.data.data))
            // .then(res => console.log(res.data.data))
            .catch(err => console.log(err));
    }, []);

    const handleAccountNum = (e) => {
        accountNumber = e.target.options[e.target.selectedIndex].value
        // setAccountNum(e.target.options[e.target.selectedIndex].value)
        // setAccountNum(accountNum)
    }

    const onClickNext = () => {
        if (accountNumber === undefined || accountNumber === '계좌를 선택해주세요')
            alert('출금계좌를 선택해주세요')
        else
            { 
                console.log(accountNumber)
                navigate('/transfer',
                {state: accountNumber} 
            )}
    }

    const Tr2 = ({ info }) => {
        return (
            <Form.Select className={styles.accountinput} aria-label="Default select example" onChange={handleAccountNum}>
                <option>계좌를 선택해주세요</option>
                {
                    info.map((item, idx) => {
                        return (
                            <Td2 key={item.accountNumber} item={item} />
                        )
                    })
                }
            </Form.Select>
        );
    };

    const Td2 = ({ item }) => {
        return (
            <>
                <option value={item.accountNumber}>{item.accountNumber}</option>
            </>
        )
    }

    return (
        <div className={styles.SelectAccount}>
            <Container fluid>
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={1}>
                        <h3 className={styles.accountNumber}>계좌번호</h3>
                    </Col>
                    <Col lg={4}>
                        <h2 className={styles.application}>출금 계좌번호 선택</h2>
                        <Tr2 info={info2} />
                        <Button className={styles.nextbutton} variant="primary" size="lg" onClick={onClickNext}>다음
                        </Button>
                    </Col>
                    <Col lg={4}></Col>

                </Row>
            </Container>
        </div>
    );
}

export default SelectAccount;
