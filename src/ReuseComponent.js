
function ReuseComponent(props) { 
  
  return (
    <div>
        <span>{props.users.name} </span>
        <span>{props.users.email} </span>
    </div>
  );
}

export default ReuseComponent;

