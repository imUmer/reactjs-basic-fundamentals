
import { useEffect, useState } from 'react';
import {Table, Button} from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom';
function ApiDelete() {

    const [student,setStudent]=useState([])
  useEffect(()=>{
    getList()
  },[])
  function getList()
  {
    fetch('http://localhost:4000/student').then(res=>{
        console.warn(res);
        res.json().then(data=>{
            setStudent(data)
        })
    })
  }
  function deleteStudent(id)
  {
    fetch(`http://localhost:4000/student/${id}`,{
        method:"DELETE"
    }).then(res=>{
        res.json().then(resp=>{
            console.warn(resp);
        })
        getList()
    })
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
        {
            student.map((data,i)=>
                <tr key={i+1}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.address}</td>
                    <td><Button onClick={()=>deleteStudent(data.id)}>Delete</Button>  </td>
                    
                </tr>
            )
        }       
        </tbody> 
        </Table >
    </div>
  )
}
export default ApiDelete;

