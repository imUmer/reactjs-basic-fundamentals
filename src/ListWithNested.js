
import {Table} from 'react-bootstrap'
function ListWithNested() {

  const emails =[
      {name:'umer',email:'umer@test.com', address:[{house:'1',street:'Qazi'}]},
      {name:'asad',email:'asad@test.com', address:[{house:'2',street:'Qazi'}]},
      {name:'shahzad',email:'shahzad@test.com', address:[{house:'3',street:'Mukaram'}]},
  ]
  
  return (
    <div>
        <h1>Student emails</h1>
        <Table striped bordered hover variant="dark">
            <tbody>
            <tr>
                <td>Id</td>
                <td>name</td>
                <td>email</td>
                <td>address</td>
            </tr>
        {
            emails.map((data,i)=>
                <tr key={i+1}>
                    <td>{i+1}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>
                    <Table variant='dark' striped>
                        <tbody>
                            {
                                data.address.map((d,index)=>
                                    <tr key={index}>
                                        <td>{d.house}</td>                                        
                                        <td>{d.street}</td>                                        
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                    </td>
                </tr>
            )
        }       
        </tbody> 
        </Table >
        <p>Maps are only used in return while for loop can't be used in return</p>
    </div>
  );
}

export default ListWithNested;

