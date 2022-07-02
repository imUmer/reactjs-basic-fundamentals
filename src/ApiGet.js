import { useEffect, useState } from "react"
import {Table} from 'react-bootstrap'
function ApiGet()
{
    const [users,setUser]=useState([])
    useEffect(()=>{
        fetch("http://localhost:4000/student").then( (res)=>{
            res.json().then((data)=>{ 
                console.warn(data)
                setUser(data)
            })
        })
    },[])
    console.warn(users)
    return(
        <div>
            <h2>Application Programming Interface</h2>
            <Table>
                <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                        </tr>
            {
                users.map(user=>
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.address}</td>
                    </tr>
                    )
            }
                </tbody>
            </Table>
        </div>
    )
}
export default ApiGet