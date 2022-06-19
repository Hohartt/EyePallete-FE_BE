import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../css/cardissuance.module.css";
import { Router, Route, Routes, Link } from "react-router-dom";
import React, { useEffect } from 'react';
import Axios from 'axios';

function Cardissuance() {

  const [info2, setInfo2] = React.useState([]);
  // const [selectCardType, setSelectCardType] = React.useState("");


  let accountNumber
  let cardType
  let i
  const handleAccountNum = (e) => {
    accountNumber = e.target.options[e.target.selectedIndex].value
    // setAccountNum(e.target.options[e.target.selectedIndex].value)
    // setAccountNum(accountNum)
  }

  const handleCardType = (e) => {
    cardType = e.target.options[e.target.selectedIndex].text
  };

  useEffect(() => {
    Axios.get('/users/accounts/inquiry',
      { params: { userId: sessionStorage.getItem('loginId') } }
    )
      .then(res => setInfo2(res.data.data))
      // .then(res => console.log(res.data.data))
      .catch(err => console.log(err));
  }, []);

  const onClickSubmit = () => {
    if (accountNumber === undefined || accountNumber === "계좌를 선택해주세요")
      alert('계좌번호를 선택해주세요')
    else if (cardType === undefined || cardType === "카드종류를 선택해주세요")
      alert('카드종류를 선택해주세요')
    else {
      Axios.post('users/card', {
        "accountNumber": accountNumber,
        "cardType": cardType,
        "loginId": sessionStorage.getItem('loginId')
      }
      )
        .then(res => {
          if (res.data.checker === true) {
            document.location.href = 'cardissuancecompletepage'
          }
          else
            alert(res.data.message)
        })

        .catch()
    }
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
    <div className={styles.Cardissuance}>
      <Container fluid>
        <Row className={styles.contentTop}>
          <Col lg={3}></Col>
          <Col lg={1}>
            <h3 className={styles.cardtype}>계좌번호</h3>
            <h3 className={styles.cardtype}>카드종류</h3>
            <h3 className={styles.guide}>개인정보 수집 및 이용동의</h3>
          </Col>
          <Col lg={4}>
            <h2 className={styles.application}>카드발급 신청</h2>

            <Tr2 info={info2} />
            <Form.Select className={styles.cardtypeinput} aria-label="Default select example" onChange={handleCardType}>
              <option>카드종류를 선택해주세요</option>
              <option value="1">상명카드1</option>
              <option value="2">상명카드2</option>
            </Form.Select>


            {/* <Form className={styles.cardcheckbox}>
              {['checkbox'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check className={styles.firstcard}
                    inline
                    label="카드1"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check className={styles.secondcard}
                    inline
                    label="카드2"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </Form> */}

            <Form.Control
              className={styles.textinput}
              as="textarea"
              rows={3}
              disabled
              readOnly
              placeholder=". 개인정보의 수집 및 이용 동의서
 - 이용자가 제공한 모든 정보는 다음의 목적을 위해 활용하며, 하기 목적 이외의 용도로는 사용되지 않습니다.
① 개인정보 수집 항목 및 수집·이용 목적
 가) 수집 항목 (필수항목)
- 성명(국문), 주민등록번호, 주소, 전화번호(자택, 휴대전화), 사진, 이메일, 나이, 재학정보, 병역사항,
외국어 점수, 가족관계, 재산정도, 수상내역, 사회활동, 타 장학금 수혜현황, 요식업 종사 현황 등 지원
신청서에 기재된 정보 또는 신청자가 제공한 정보
 나) 수집 및 이용 목적
- 하이트진로 장학생 선발 전형 진행
- 하이트진로 장학생과의 연락 및 자격확인
- 하이트진로 장학생 자원관리
 ② 개인정보 보유 및 이용기간
 - 수집·이용 동의일로부터 개인정보의 수집·이용목적을 달성할 때까지
 ③ 동의거부관리
 - 귀하께서는 본 안내에 따른 개인정보 수집, 이용에 대하여 동의를 거부하실 권리가 있습니다. 다만,
귀하가 개인정보의 수집/이용에 동의를 거부하시는 경우에 장학생 선발 과정에 있어 불이익이 발생할 수
있음을 알려드립니다."
            />

            <Button className={styles.submitbutton} variant="primary" size="lg">
              <Link to onClick={onClickSubmit}>제출</Link>
            </Button>
          </Col>
          <Col lg={4}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cardissuance;
