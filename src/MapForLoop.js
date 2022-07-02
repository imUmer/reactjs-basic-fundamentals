
import {useState} from 'react';
import {Table} from 'react-bootstrap'
function MapForLoop() {

  const students =['Umer','Asad','shahzad']
  const emails =[
      {email:'umer@test.com', address:'Na1'},
      {email:'asad@test.com', address:'Ba1'},
      {email:'shahzad@test.com', address:'Na1'},
  ]
  
  return (
    <div>
        <h1>Student names</h1>
        {
            students.map((names,i)=>
                <h2 key={i}>{ names } </h2>
            )
        }
        <h1>Student emails</h1>
        <Table striped bordered hover variant="dark">
            <tbody>
            <tr>
                <td>Id</td>
                <td>email</td>
                <td>address</td>
            </tr>
        {
            emails.map((data,i)=>
            data.address ==='Na1'?
                <tr key={i}>
                    <td>{i}</td>
                    <td>{data.email}</td>
                    <td>{data.address}</td>
                </tr>:null
            )
        }       
        </tbody> 
        </Table >
        <p>Maps are only used in return for loop can't be used in return</p>
    </div>
  );
}

export default MapForLoop;

