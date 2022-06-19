import { Router, Route, Routes, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import styles from "../css/Netsec.module.css";
import Pagination from "react-bootstrap/Pagination";
import PageItem from "react-bootstrap/PageItem";

const Netsec = () => {
  return (
    <div>
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
            <td>은행 사칭 악성 이메일 유의 알림</td>
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

export default Netsec;
