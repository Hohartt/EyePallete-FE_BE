import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../css/transfercomplete.module.css";
import Axios from 'axios';
import React, { useEffect } from 'react';


function Transfercomplete() {

    const location = useLocation()
    const [balanceNum, setBalanceNum] = React.useState('')
    let i
    let balance
    let accountNumber = location.state[0].accountNumber

    Axios.get('/users/accounts/inquiry',
            // { params: { userId: sessionStorage.getItem('loginId') } }
            { params: { userId: sessionStorage.getItem('loginId') } }

        )
            .then(res => {
                for (i = 0; i < res.data.data.length; i++) {
                    if (accountNumber == res.data.data[i].accountNumber) {
                        balance = res.data.data[i].balance
                        setBalanceNum(balance)
                    }
                }
            })
            .catch()
    
    console.log(location.state)
    return (
        <div className={styles.Transfercomplete}>
            <Container fluid>
                <Row>
                    <Col lg={2}></Col>
                    <Col lg={8}>
                        <h3 className={styles.complete}>이체완료</h3>
                        <Table className={styles.completetable} striped bordered hover>
                            <thead>
                                <tr>
                                    <th>거래일자</th>
                                    <th>거래시간</th>                                    
                                    <th>출금(원)</th>                                  
                                    <th>받는통장 메모</th>
                                    <th>내통장 메모</th>
                                    <th>잔액(원)</th>
                                    <th>거래점</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{location.state[0].transactionDate}</td>
                                    <td>{location.state[0].transactionTime}</td>                                    
                                    <td>{location.state[0].inputAmount}</td>                                    
                                    <td>{location.state[0].inputToReceiberMessage}</td>
                                    <td>{location.state[0].inputToSenderMessage}</td>
                                    <td>{balanceNum}</td>
                                    <td>상명은행</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Button className={styles.continuebutton} variant="primary">
                            <Link to="/selectAccount">이체계속하기</Link>
                        </Button>{" "}
                        <Button className={styles.checkbutton} variant="primary">
                            <Link to="/">확인</Link>
                        </Button>{" "}
                    </Col>
                    <Col lg={2}></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Transfercomplete;