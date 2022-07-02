import {useState} from 'react';

function stateFun() {

  ///////  this is state decleration

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState('Umer')
  function updateData(){
    setData('Umer Niaz')
    alert('data updated!')
  }
  /////// This is simple variable declareation

  // eslint-disable-next-line no-undef
  // state = {
  //   name : 'Umer'
  // }
  
  return (
    <div>
     <h3>{ data } </h3>
     <button onClick={updateData}>Click me</button>
    </div>
  );
}

export default stateFun;
