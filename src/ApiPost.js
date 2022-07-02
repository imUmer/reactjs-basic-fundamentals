import { useState } from "react"

function ApiPost()
{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [address,setAddress]=useState("")
    function saveData()
    {
        console.warn(name,email,address);
        let data={name,email,address}
        fetch('http://localhost:4000/student',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        }).then(res=>{
            console.warn(res);
            res.json().then(resp=>{
                console.warn(resp);
            })
        })
    }
    return(
        <div>
            <h2>POST method</h2>
            Name: <input type={'text'} value={name} onChange={(e)=>{setName(e.target.value)}} name='name' /> <br/><br/>
            Email: <input type={'text'} value={email} onChange={(e)=>{setEmail(e.target.value)}} name='email' /><br/><br/>
            Address: <input type={'text'} value={address} onChange={(e)=>{setAddress(e.target.value)}} name='address' /><br/><br/>
            <button onClick={saveData}>Save</button><br/><br/>
        </div>
    )
}
export default ApiPost