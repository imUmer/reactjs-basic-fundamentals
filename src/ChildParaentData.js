export default function ChildParaentData(props)
{
    let data={name:'umer',email:'umer@test.com'}
    return(
        <div>
            <h2>Child component</h2>
            <button onClick={()=>props.alert(data)}>Send Data to Parent</button>
        </div>
    )
}