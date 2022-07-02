import {useParams} from 'react-router-dom'
function User(props) {
    return (
      <div>
       <h1>function component of User {props.params.id}, name : {props.params.name}</h1>
      </div>
    );
  }
  const withRouter = WrappedComponent => props => {
    const params = useParams();
    // etc... other react-router-dom v6 hooks
  
    return (
      <WrappedComponent
        {...props}
        params={params}
        // etc...
      />
    );
  };
  export default withRouter(User);
  