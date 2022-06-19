import { Container, Row, Col, Form, Button, InputGroup, FormControl } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/transfer.module.css';
import React, { useEffect } from 'react';
import Axios from 'axios';
import SelectAccount from './selectAccount';



function Transfer() {

    const navigate = useNavigate();
    const location = useLocation()
    const [isAccount, setIsAccount] = React.useState(false)
    const [inputAccount, setInputAccount] = React.useState('');
    const [inputAmount, setInputAmount] = React.useState('');
    const [inputPw, setInputPw] = React.useState('');
    const [inputToReceiberMessage, setInputToReceiverMessage] = React.useState('');
    const [inputToSenderMessage, setInputToSenderMessage] = React.useState('');
    const [info2, setInfo2] = React.useState([]);
    // const [accountNum, setAccountNum] = React.useState('')
    const [balanceNum, setBalanceNum] = React.useState('')

    let balance
    const accountNumber = location.state
    // let accountNumber
    let i
    // const handleAccountNum = (e) => {
    //     accountNumber = e.target.options[e.target.selectedIndex].value
    //     // setAccountNum(e.target.options[e.target.selectedIndex].value)
    //     // setAccountNum(accountNum)
    // }


    // {
    //     Axios.get('/users/accounts/inquiry',
    //         // { params: { userId: sessionStorage.getItem('loginId') } }
    //         { params: { userId: sessionStorage.getItem('loginId') } }

    //     )
    //         .then(res => {
    //             for (i = 0; i < res.data.data.length; i++) {
    //                 if (accountNumber == res.data.data[i].accountNumber) {
    //                     balance = res.data.data[i].balance
    //                 }
    //             }
    //             setBalanceNum(balance)
    //         })
    //         .catch()
    // }

    useEffect(() => {
        if (sessionStorage.getItem('loginId') !== null) {
            Axios.get('/users/accounts/inquiry',
                { params: { userId: sessionStorage.getItem('loginId') } }
            )
                .then(res => {
                    if (Object.keys(res.data.data).length === 0) {
                        console.log('isAccount ?? :: ', isAccount)
                        document.location.href = '/CreateAccountpage'
                    }
                    else {
                        console.log('isAccount ?? :: ', isAccount)
                        // account = res.data.data[0].accountNumber
                        // balance = res.data.data[0].balance
                        setIsAccount(true)
                    }
                })
                .catch()
        }
    }, [])

    const handleInputAccount = (e) => {
        setInputAccount(e.target.value)
    }

    const handleInputAmount = (e) => {
        setInputAmount(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    const handleInputToReceiverMessage = (e) => {
        setInputToReceiverMessage(e.target.value)
    }

    const handleInputToSenderMessage = (e) => {
        setInputToSenderMessage(e.target.value)
    }

    const onClickReset = () => {
        setInputAmount('')
    }

    const onClickFullAmount = () => {
        Axios.get('/users/accounts/inquiry',
            // { params: { userId: sessionStorage.getItem('loginId') } }
            { params: { userId: sessionStorage.getItem('loginId') } }

        )
            .then(res => {
                for (i = 0; i < res.data.data.length; i++) {
                    if (accountNumber == res.data.data[i].accountNumber) {
                        balance = res.data.data[i].balance
                    }
                }
                setInputAmount(balance)
            })
            .catch()
    }

    const onClickMillion = () => {
        if (inputAmount === '')
            setInputAmount(1000000)
        else
            setInputAmount(parseInt(inputAmount) + 1000000)
    }

    const onClickFiveHundredThousand = () => {
        if (inputAmount === '')
            setInputAmount(500000)
        else
            setInputAmount(parseInt(inputAmount) + 500000)
    }

    const onClickHundredThousand = () => {
        if (inputAmount === '')
            setInputAmount(100000)
        else
            setInputAmount(parseInt(inputAmount) + 100000)
    }

    const onClickTransfer = () => {
        console.log('전액: ' + balanceNum)
        console.log('이체금액: ' + inputAmount)
        // setAccountNum(accountNumber)
        if (inputAccount.length === 0)
            alert('입금계좌번호가 비어있습니다')
        else if (inputPw.length === 0)
            alert('계좌비밀번호가 비어있습니다')
        else if (inputPw.length !== 6)
            alert('계좌비밀번호의 형식이 올바르지 않습니다')
        else if (inputAmount.length === 0)
            alert('이체금액이 비어있습니다')
        else if (accountNumber === undefined)
            alert('출금계좌를 선택해주세요')
        else {
            Axios.post('users/accounts/transaction', {
                "accountPassword": inputPw,
                "balance": inputAmount,
                "loginId": sessionStorage.getItem('loginId'),
                "myAccountNumber": accountNumber,
                "sendAccountNumber": inputAccount,
                "toReceiverMessage": inputToReceiberMessage,
                "toSenderMessage": inputToSenderMessage
                
            }
            )
                .then(res => {

                    if (res.data.checker === true) {
                        const date = new Date();
                        let year = date.getFullYear()
                        let month = date.getMonth() + 1
                        let date2 = date.getDate()
                        let hours = date.getHours()
                        let minutes = date.getMinutes()
                        let seconds = date.getSeconds()

                        if (month < 10)
                            month = '0' + month
                        else
                            month = month
                        if (date2 < 10)
                            date2 = '0' + date2
                        else
                            date2 = date2
                        if (hours < 10)
                            hours = '0' + hours
                        else
                            hours = hours
                        if (minutes < 10)
                            minutes = '0' + minutes
                        else
                            minutes = minutes
                        if (seconds < 10)
                            seconds = '0' + seconds
                        else
                            seconds = seconds

                        let transactionDate = year + '-' + month + '-' + date2
                        let transactionTime = hours + ':' + minutes + ':' + seconds

                        navigate('/transfercomplete',
                            {
                                state: [
                                    {
                                        accountNumber: accountNumber,
                                        transactionDate: transactionDate,
                                        transactionTime: transactionTime,
                                        inputAmount: inputAmount,
                                        inputToReceiberMessage: inputToReceiberMessage,
                                        inputToSenderMessage: inputToSenderMessage
                                    }
                                ]
                            }
                        )
                    }
                    else
                        alert(res.data.message)
                })

                .catch()
        }
    }

    // useEffect(() => {
    //     Axios.get('/users/accounts/inquiry',
    //         { params: { userId: sessionStorage.getItem('loginId') } }
    //     )
    //         .then(res => setInfo2(res.data.data))
    //         // .then(res => console.log(res.data.data))
    //         .catch(err => console.log(err));
    // }, []);

    // const Tr2 = ({ info }) => {
    //     return (
    //         <Form.Select className={styles.accountinput} aria-label="Default select example" onChange={handleAccountNum}>
    //             <option>계좌를 선택해주세요.</option>
    //             {
    //                 info.map((item, idx) => {
    //                     return (
    //                         <Td2 key={item.accountNumber} item={item} />
    //                     )
    //                 })
    //             }
    //         </Form.Select>
    //     );
    // };

    // const Td2 = ({ item }) => {
    //     return (
    //         <>
    //             <option value={item.accountNumber}>{item.accountNumber}</option>
    //         </>
    //     )
    // }


    return (
        <div className="Transfer">
            <Container fluid>
                <Row className={styles.contentTop}>
                    <Col lg={3}></Col>
                    <Col lg={1}>
                        <h2 className={styles.banktransfer}>계좌이체</h2>
                        <h5 className={styles.depositaccountnumber}>입금계좌번호</h5>
                        <h5 className={styles.depositinformation}>계좌비밀번호</h5>
                        <h5 className={styles.transferamount}>이체금액</h5>
                        <h5 className={styles.receivingaccountkmemo}>받는통장 메모</h5>
                        <h5 className={styles.myaccountmemo}>내통장 메모</h5>
                        {/* <h5 className={styles.withdrawalaccountnumber}>출금계좌번호</h5> */}
                    </Col>
                    <Col lg={5}>
                        <Form.Control className={styles.accountinput2} as="textarea" rows={1} placeholder="-없이 입력" onChange={handleInputAccount} value={inputAccount} />
                        <Form.Control
                            className={styles.banklist}
                            type="password"
                            placeholder="숫자6자리를 입력해주세요."
                            onChange={handleInputPw}
                            value={inputPw}
                        // onChange={handleInputPw}
                        />
                        <InputGroup className={styles.transferamountinput}>
                            <FormControl onChange={handleInputAmount} value={inputAmount} />
                            <InputGroup.Text>원</InputGroup.Text>
                        </InputGroup>
                        <div className={styles.buttonlist}>
                            <Button className={styles.millionbutton} variant="secondary" size="md" onClick={onClickMillion}>
                                100만
                            </Button>

                            <Button className={styles.fivehundredthousandbutton} variant="secondary" size="md" onClick={onClickFiveHundredThousand}>
                                50만
                            </Button>

                            <Button className={styles.onehundredthousandbutton} variant="secondary" size="md" onClick={onClickHundredThousand}>
                                10만
                            </Button>

                            <Button className={styles.fullamountbutton} variant="secondary" size="md" onClick={onClickFullAmount}>
                                전액
                            </Button>

                            <Button className={styles.correctionbutton} variant="secondary" size="md" onClick={onClickReset}>
                                정정
                            </Button>
                        </div>
                        <Form.Control className={styles.receivingaccountkmemoinput} as="textarea" rows={1} placeholder="내용을 입력해주세요" onChange={handleInputToReceiverMessage} value={inputToReceiberMessage} />

                        <Form.Control className={styles.myaccountmemoinput} as="textarea" rows={1} placeholder="내용을 입력해주세요" onChange={handleInputToSenderMessage} value={inputToSenderMessage} />

                        {/* <Tr2 info={info2} /> */}

                        <Button className={styles.nextbutton} variant="primary" size="lg" onClick={onClickTransfer} >
                            다음
                        </Button>
                    </Col>
                    <Col lg={3}></Col>


                </Row>
            </Container>
        </div>
    );
}

export default Transfer;






















