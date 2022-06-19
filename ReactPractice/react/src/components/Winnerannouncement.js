import { Nav } from "react-bootstrap";
import { Router, Route, Routes, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import PageItem from "react-bootstrap/PageItem";
import styles from "../css/Winnerannouncement.module.css";

const Winnerannouncement = () => {
  return (
    <div>
      <Nav fill className={styles.nav} variant="pills" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link href="/Event" active>
            진행중인 이벤트
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Eventfinishedpage" active>
            종료된 이벤트
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Winnerannouncementpage" active>
            당첨자 발표
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>등록일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10</td>
            <td>이벤트1의 당첨자를 발표합니다.</td>
            <td>2022-02-25</td>
          </tr>
          <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
          </tr>

          <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
          </tr>

          <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
          </tr>

          <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
          </tr>

          <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
          </tr>

          <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
          </tr>

          <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
          </tr>

          <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
          </tr>

          <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
          </tr>

          <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
          </tr>

          <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
          </tr>
        </tbody>
      </Table>

      <Pagination size="lg" className={styles.pagenav_smbank}>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Item>{5}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
};

export default Winnerannouncement;
