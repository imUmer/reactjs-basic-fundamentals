import { Table, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
function PreFilledFrom() {
  const [student, setStudent] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [stnd, setStd] = useState([]);
  useEffect(() => {
    getList();
  }, []);
  function getList() {
    fetch("http://localhost:4000/student").then((res) => {
      console.warn(res);
      res.json().then((data) => {
        setStudent(data);
        console.warn(data[0].name);
      });
    });
  }
  function deleteStudent(id) {
    fetch(`http://localhost:4000/student/${id}`, {
      method: "DELETE",
    }).then((res) => {
      res.json().then((resp) => {
        console.warn(resp);
      });
      getList();
    });
  }
  function selectStudentFetch(id) {
    fetch(`http://localhost:4000/student/${id}`, {
      method: "GET",
    }).then((res) => {
      res.json().then((resp) => {
        console.warn(resp);
        setName(resp.name);
        setEmail(resp.email);
        setAddress(resp.address);
      });
    });
  }
  function selectStudent(id) {
    console.warn(student[id - 1]);
    let std = student[id - 1];
    /// with single state
    setStd(std);
    /// with multiple states
    setName(std.name);
    setEmail(std.email);
    setAddress(std.address);
  }
  return (
    <div>
      <h1>Students Data</h1>
      <Table striped bordered hover variant="dark">
        <tbody>
          <tr>
            <td>Id</td>
            <td>name</td>
            <td>email</td>
            <td>address</td>
            <td>Edit</td>
          </tr>
          {student.map((data, i) => (
            <tr key={i + 1}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.address}</td>
              <td>
                <div class="btn-toolbar">
                  <Button
                    type="button"
                    id="btnSubmit"
                    class="btn btn-primary mr-3 btn-sm "
                    onClick={() => deleteStudent(data.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    type="button"
                    id="btnSubmit"
                    class="btn btn-primary btn-sm"
                    onClick={() => selectStudent(data.id)}
                  >
                    Select
                  </Button>{" "}
                </div>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <h2>Form</h2>
        <input type={"text"} value={stnd.name} /> <br />
        <br />
        <input type={"text"} value={stnd.email} /> <br />
        <br />
        <input type={"text"} value={stnd.address} /> <br />
        <br />
        <Button>Update student</Button> <br />
        <br />
      </div>
    </div>
  );
}
export default PreFilledFrom;
