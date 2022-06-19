import Table from "react-bootstrap/Table";
import styles from "../css/Customerservice.module.css";
import Pagination from "react-bootstrap/Pagination";

const Customerservice = () => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>등록일</th>
            <th>글쓴이</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10</td>
            <td>비밀글 입니다. </td>
            <td>2022-05-07</td>
            <td>홍길동</td>
          </tr>
          <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td></td>
          </tr>
          <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td></td>
          </tr>

          <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td></td>
          </tr>

          <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td></td>
          </tr>

          <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td></td>
          </tr>

          <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td></td>
          </tr>

          <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td></td>
          </tr>

          <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td></td>
          </tr>

          <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td></td>
          </tr>

          <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td></td>
          </tr>

          <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td></td>
          </tr>

          <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td></td>
          </tr>
        </tbody>
      </Table>

      <Pagination size="lg" className={styles.pagenav_cs}>
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

export default Customerservice;
