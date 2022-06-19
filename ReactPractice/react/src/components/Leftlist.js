import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Route, Routes, Link } from "react-router-dom";
import { Container, Carousel } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import styles from "../css/LeftList.module.css";

const leftList = () => {
  return (
    <div>
      <ul className={styles.noBullet}>
        {/* 0번링크는 지금 메인페이지로 해야할 듯?  */}
        <li className={styles.leftCont}>
          <Link to="/Productpage">예적금</Link>
          <div className={styles.divideLineC}></div>
        </li>
        <li className={styles.leftCont}>
          <Link to="/Newnewspage">새소식</Link>
          <div className={styles.divideLineC}></div>
        </li>

        <li className={styles.leftCont}>
          <Link to="/OngoingEvent">이벤트</Link>
          <div className={styles.divideLineC}></div>
        </li>

        <li className={styles.leftCont}>
          <Link to="/Customerservicepage">상담센터</Link>
          <div className={styles.divideLineC}></div>
        </li>

        <li className={styles.leftCont}>
          <Link to="/Incidentnotificationpage">사고신고</Link>
          <div className={styles.divideLineC}></div>
        </li>

        <li className={styles.leftCont}>
          <Link to="/Netsecpage">보안공지</Link>
          <div className={styles.divideLineC}></div>
        </li>

        <li className={styles.leftCont}>
          <Link to="/">금융상품</Link>
          <div className={styles.divideLineC}></div>
        </li>

        <li className={styles.leftCont}>
          <Link to="/Bankstatementpage">거래내역</Link>
          <div className={styles.divideLineC}></div>
        </li>

        <li className={styles.leftCont}>
          <Link to="/loanapply">대출</Link>
          <div className={styles.divideLineC}></div>
        </li>

        <li className={styles.leftCont}>
          <Link to="/Quicksearchpage">빠른거래내역</Link>
          <div className={styles.divideLineC}></div>
        </li>

        <li className={styles.leftCont}>
          <Link to="/Transfer">이체</Link>
          <div className={styles.divideLineC}></div>
        </li>

        <li className={styles.leftCont}>
          <Link to="/cardissuance">카드발급</Link>
          <div className={styles.divideLineC}></div>
        </li>

        <Row>
          <Col>
            <img src="img/cs_img.jpg" className={styles.cs_size}></img>
          </Col>
          <Col>
            <div className={styles.leftCont2}>
              <Link to="/Customerservicepage">고객센터</Link>
            </div>
          </Col>
        </Row>
      </ul>
    </div>
  );
};

export default leftList;
