import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import styles from "../css/Bankstatement.module.css";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pagination from "./pagination"


const Bankstatement = () => {

  const navigate = useNavigate();

  // const [isAccount, setIsAccount] = React.useState(false)
  const [accountNum, setAccountNum] = React.useState('')
  const [name, setName] = React.useState('')
  const [balanceNum, setBalanceNum] = React.useState('')
  const [inquireNum, setInquireNum] = React.useState('')
  const [info, setInfo] = React.useState([])
  const [info2, setInfo2] = React.useState([]);

  let accountNumber

  const handleAccountNum = (e) => {
    accountNumber = e.target.options[e.target.selectedIndex].value
    // setAccountNum(e.target.options[e.target.selectedIndex].value)
    // setAccountNum(accountNum)
  }

  let balance
  let inquireNumber = 0

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  function currentPosts(tmp) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }

  // useEffect(() => {
  // }, [isRender]);

  // useEffect(() => {
  //   if (sessionStorage.getItem('loginId') !== null) {
  //     Axios.get('/users/accounts/inquiry',
  //       // { params: { userId: sessionStorage.getItem('loginId') } }
  //       { params: { userId: sessionStorage.getItem('loginId') } }

  //     )
  //       .then(res => {
  //         if (Object.keys(res.data.data).length === 0)
  //           console.log('isAccount ?? :: ', isAccount)
  //         else {
  //           console.log('isAccount ?? :: ', isAccount)
  //           // setAccountNum(res.data.data[0].accountNumber)
  //           // account = res.data.data[0].accountNumber
  //           // balance = res.data.data[0].balance
  //           setIsAccount(true)
  //         }
  //       })
  //       .catch()
  //   }
  // })


  let i
  let senderAccount
  let transactionDate
  let transactionTime
  let amount
  let depositAmount
  let withdrawAmount
  let infoTest = []
  let tempInfoTest = []
  const onClickInquiry = () => {
    setCurrentPage(1)
    setAccountNum(accountNumber)
    // setIsRender(isRender + 1)

    {
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
          setBalanceNum(balance)
        })
        .catch()
    }

    {
      Axios.get('/users/',
        { params: { loginId: sessionStorage.getItem('loginId') } }

      )
        .then(res => {
          setName(res.data.data.name)
        })
        .catch()
    }

    if (/*isAccount === true && */accountNumber !== undefined && accountNumber !== '계좌를 선택해주세요') {
      // Axios.get('/users/transactions/' + account,
      // )
      Axios.post('/users/transactions/inquiry', {
        "accountNumber": accountNumber,
        "endDate": '2022-06-30-23:59:59',
        "startDate": '2022-05-02-00:00:00',
      }
      )
        .then(res => {
          if (Object.keys(res.data.data).length === 0)
            console.log('거래내역이 존재하지 않습니다.')

          // else if (Object.keys(res.data.data).length === 1){
          //     transactionDate = res.data.data[0].transactionDate.substring(0,10)
          //     console.log('1번째 거래내역 = ' + ' 거래날짜:' + transactionDate + '보낸사람계좌:'
          //       + res.data.data[0].senderAccount + ' 보낸사람계좌:' + res.data.data[0].receiverAccount  + ' 거래금액:' + res.data.data[0].sendMoney + '받는통장 메모:' + res.data.data[0].toReceiverMessage + '보낸통장 메모:' + res.data.data[0].toSenderMessage)
          // }
          else {
            for (i = 0; i < res.data.data.length; i++) {
            // for (i = 0; i < res.data.data.length - (res.data.data.length-10); i++) {
            


              // console.log(res.data.data[i].sendMoney)
              // console.log(typeof(res.data.data[i].sendMoney))
              // if (res.data.data[i].sendMoney <= 0){
              //   amount = res.data.data[i].sendMnoney.toString()
              //   console.log(amount)
              // }
              // else{
              //   amount = res.data.data[i].sendMnoney.toString()
              //   console.log(amount)
              // }
              // amount = (res.data.data[i].sendMoney >= 0) ? res.data.data[i].sendMoney : Math.abs(res.data.data[i].sendMoney)
              inquireNumber = inquireNumber + 1
              transactionDate = res.data.data[i].transactionDate.substring(0, 10)
              transactionTime = res.data.data[i].transactionDate.substring(11, 19)
              amount = res.data.data[i].sendMoney
            

              if (amount >= 0) {
                senderAccount = res.data.data[i].senderAccount
                depositAmount = amount
                withdrawAmount = '-'
                // console.log(i + 1 + '번째 거래내역 = ' + ' 거래일자:' + transactionDate + ' 거래시간' + transactionTime + ' 출금(원):' + withdrawAmount + ' 입금(원)' + depositAmount + ' 메모:' + res.data.data[i].toReceiverMessage
                // )
                infoTest = { "id": i + 1, "transactionDate": transactionDate, "transactionTime": transactionTime, "withdrawAmount": withdrawAmount, "depositAmount": depositAmount, "senderAccount":  senderAccount, "memo": res.data.data[i].toReceiverMessage }
                tempInfoTest.push(infoTest)



                // .push(transactionDate, transactionTime, withdrawAmount, depositAmount, res.data.data[i].toReceiverMessage)
                // console.log(tempInfoTest)
              }
              else {
                senderAccount = '-'
                depositAmount = '-'
                withdrawAmount = Math.abs(amount)
                // console.log(i + 1 + '번째 거래내역 = ' + ' 거래일자:' + transactionDate + ' 거래시간' + transactionTime + ' 출금(원):' + withdrawAmount + ' 입금(원)' + depositAmount + ' 메모:' + res.data.data[i].toSenderMessage
                // )
                infoTest = { "id": i + 1, "transactionDate": transactionDate, "transactionTime": transactionTime, "withdrawAmount": withdrawAmount, "depositAmount": depositAmount, "senderAccount":  senderAccount, "memo": res.data.data[i].toSenderMessage }
                tempInfoTest.push(infoTest)
              }
              setInfo(tempInfoTest)



              // console.log(i + 1 + '번째 거래내역 = ' + ' 거래날짜:' + transactionDate + '보낸사람계좌:'
              //   + res.data.data[i].senderAccount + ' 받은사람계좌:' + res.data.data[i].receiverAccount + ' 거래금액:' + res.data.data[i].sendMoney + '받는통장 메모:' + res.data.data[i].toReceiverMessage + '보낸통장 메모:' + res.data.data[i].toSenderMessage
              // )
            } // 거래내역 찍히게 변경해야함, 이체금액 - 떼고 줘야됨



            // console.log(transactionDate)
            // console.log(`${res.data.data[i].sendMoney}`)
            setInquireNum(inquireNumber)

            //여기구분선



          }
        })
        .catch()
    }
    else if(/*isAccount === true &&*/(accountNumber === undefined || accountNumber === '계좌를 선택해주세요'))
      alert('계좌번호를 선택해주세요')

    else
      document.location.href = 'CreateAccountpage'
  }

  const onClickTransfer = () => {
    if (accountNumber === undefined || accountNumber === '계좌를 선택해주세요')
            alert('출금계좌를 선택해주세요')
        else
            { 
                console.log(accountNumber)
                navigate('/transfer',
                {state: accountNumber} 
            )}
  }

  useEffect(() => {
    Axios.get('/users/accounts/inquiry',
      { params: { userId: sessionStorage.getItem('loginId') } }
    )
      .then(res => setInfo2(res.data.data))
      // .then(res => console.log(res.data.data))
      .catch(err => console.log(err));
  }, []);



  const Tr2 = ({ info }) => {
    return (
      <Form.Select className={styles.accountInput} aria-label="Default select example" onChange={handleAccountNum}>
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

  const Tr = ({ info }) => {
    // let infoReverse = info.slice(0).reverse()
    return (
      <tbody>
        {
          info.map((item, idx) => {
            return (
              <Td key={item.id} item={item} />
            )
          })
        }
      </tbody>
    );
  };


  const Td = ({ item }) => {
    return (
      <>
        <tr>
          <td>{item.transactionDate}</td>
          <td>{item.transactionTime}</td>
          <td>{item.withdrawAmount}</td>
          <td>{item.depositAmount}</td>
          <td>{item.senderAccount}</td>
          <td>{item.memo}</td>
          <td>상명은행</td>
        </tr>
      </>
    )
  }








  return (
    <Row>
      <div className={styles.bs_border}>
        <Row>
          <Row>
            <Col>
              <div className={styles.statement_text}>거래내역 조회</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <ul className={styles.nobullet}>
                <li className={styles.leftalign}>조회기간</li>
                <li className={styles.leftalign}>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="년"
                    className={styles.bs_margin}
                  >
                    <Dropdown.Item href="#/action-1">1995년</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">1996년</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">1997년</Dropdown.Item>
                  </DropdownButton>
                </li>
                <li className={styles.leftalign}>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="월"
                    className={styles.bs_margin}
                  >
                    <Dropdown.Item href="#/action-1">1월</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">2월</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">3월</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">4월</Dropdown.Item>
                    <Dropdown.Item href="#/action-5">5월</Dropdown.Item>
                    <Dropdown.Item href="#/action-6">6월</Dropdown.Item>
                    <Dropdown.Item href="#/action-7">7월</Dropdown.Item>
                    <Dropdown.Item href="#/action-8">8월</Dropdown.Item>
                    <Dropdown.Item href="#/action-9">9월</Dropdown.Item>
                    <Dropdown.Item href="#/action-10">10월</Dropdown.Item>
                    <Dropdown.Item href="#/action-11">11월</Dropdown.Item>
                    <Dropdown.Item href="#/action-12">12월</Dropdown.Item>
                  </DropdownButton>
                </li>
                <li className={styles.leftalign}>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="일"
                    className={styles.bs_margin}
                  >
                    <Dropdown.Item href="#/action-1">1일</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">2일</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">3일</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">4일</Dropdown.Item>
                    <Dropdown.Item href="#/action-5">5일</Dropdown.Item>
                    <Dropdown.Item href="#/action-6">6일</Dropdown.Item>
                    <Dropdown.Item href="#/action-7">7일</Dropdown.Item>
                    <Dropdown.Item href="#/action-8">8일</Dropdown.Item>
                    <Dropdown.Item href="#/action-9">9일</Dropdown.Item>
                    <Dropdown.Item href="#/action-10">10일</Dropdown.Item>
                    <Dropdown.Item href="#/action-11">11일</Dropdown.Item>
                    <Dropdown.Item href="#/action-12">12일</Dropdown.Item>
                  </DropdownButton>
                </li>
              </ul>
            </Col>
          </Row>
        </Row>

        {/* <Row>
          <Col className={styles.bs_search}>
            <ul className={styles.nobullet}>
              <li className={styles.leftalign}>조회내용</li>
              <li className={styles.leftalign}>
                <Form>
                  {["checkbox"].map((type) => (
                    <div key={`inline-${type}`} className="mb-1">
                      <Form.Check
                        className={styles.bs_form}
                        inline
                        label="전체내역"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        className={styles.bs_form}
                        inline
                        label="출금내역"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        className={styles.bs_form}
                        inline
                        label="입금내역"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                    </div>
                  ))}
                </Form>
              </li>
            </ul>
          </Col>
        </Row> */}

        <Row>
          <Col lg={3} className={styles.bs_search}>
            <ul className={styles.nobullet}>
              <li className={styles.leftalign}>계좌번호</li>
            </ul>

          </Col>
          <Col lg={5}>
            {/* <Form.Control className={styles.accountinput} type="text" placeholder="" onChange={handleAccountNum} /> */}
            {/* <Form.Select className={styles.genderinput} aria-label="Default select example">
              <option>계좌를 선택해주세요.</option>
              <option value="1">남자</option>
              <option value="2">여자</option>
            </Form.Select> */}
            <Tr2 info={info2} />
          </Col>
        </Row>

        <Row>
          <Col lg={5}></Col>
          <Col lg={1}>
            <Button variant="primary" size="lg" onClick={onClickInquiry}>
              <div className={styles.leftalign2}>조회</div>
            </Button>{" "}
          </Col>

          <Col lg={1}>
            <Button variant="primary" size="lg" onClick={onClickTransfer}>
              <div className={styles.leftalign3}>
                이체
              </div>
            </Button>{" "}
          </Col>
        </Row>
      </div>



      <Row>
        <Col lg={6}>
          <ul className={styles.nobullet}>
            <li>{inquireNum}건의 조회내역이 있습니다</li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <ul className={styles.nobullet}>
            <li>계좌번호 : {accountNum}</li>
          </ul>
        </Col>
        <Col lg={6}>
          <ul className={styles.nobullet}>
            <li> 예금주 : {name} </li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <ul className={styles.nobullet}>
            <li>상명예금</li>
          </ul>
        </Col>

        <Col lg={6}>
          <ul className={styles.nobullet}>
            <li>잔액 : {balanceNum}원</li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>거래일자</th>
                <th>거래시간</th>
                {/* <th>적요</th> */}
                <th>출금(원)</th>
                <th>입금(원)</th>
                <th>보낸이 계좌</th>
                {/* <th>내용(입금자명)</th> */}
                <th>메모</th>
                {/* <th>잔액(원)</th> */}
                <th>거래점</th>
              </tr>
            </thead>
            <Tr info={currentPosts(info.slice(0).reverse())}></Tr>
            
            
          </Table>
          <Pagination postsPerPage={postsPerPage} totalPosts={info.length} paginate={setCurrentPage}>
        </Pagination>
        </Col>
        

      </Row>
    </Row>
  );
};

export default Bankstatement;
