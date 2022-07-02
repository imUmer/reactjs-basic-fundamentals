import {useState} from 'react';
function PropsInFun(props) {  
    console.warn(props);
    const [name, setName] = useState(props.name) 
  return (
    <div style={{backgroundColor:"skyBlue"}}>
        <h3>Name : {name}</h3>
        <h3>Email : {props.email}</h3>
        <h3>address : {props.other.address}</h3>
        <h3>mobile# : {props.other.mobile}</h3>
        <button onClick={()=> {setName("Umer Niaz")}}>Update Name</button>
        <p>props value is only changed in parent class not in the same component</p>
        <h3>Prop Name : {props.name}</h3>
    </div>
  );
}

export default PropsInFun;
