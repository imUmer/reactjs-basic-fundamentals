import {useRef, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';
import StateFun from './StateFun';
import StateClass from './StateClass';
import PropsInFun from './PropsInFun';
import PropsInClass from './PropsInClass';
import InputField from './InputField';
import TogglesButtons from './TogglesButtons';
import FormsWthFun from './FormsWthFun';
import Conditions from './Conditions';
import PropsFun from './PropsFun';
import LifecycleMethods from './LifecycleMethods';
import ConstructorLSM from './ConstructorLSM';
import RenderLSM from './RenderLSM';
import ComptDidMount from './ComptDidMount';
import ComptDidUpdate from './ComptDidUpdate';
import ShouldComponentUpdate from './ShouldComponentUpdate';
import ComponentWillUnmount from './ComponentWillUnmount';
import UseEffectHooks from './UseEffectHooks';
import UseEffectStateProps from './UseEffectStateProps';
import UseEffectSpecificStateProps from './UseEffectSpecificStateProps';
import ListWithNested from './ListWithNested';
import ReuseComponent from './ReuseComponent';
import ReactFragment from './ReactFragment';
import ChildParaentData from './ChildParaentData';
import PureComponent from './PureComponent';
import UseMemoHook from './UseMemoHook';
import UseRefHook from './UseRefHook';
import ForwardRefHook from './ForwardRefHook';
import MapForLoop from './MapForLoop'
import './style.css'
import { Button,Row } from 'react-bootstrap';
import RefinReact from './RefinReact';
import ControlledComponent from './ControlledComponent';
import UncontrolledComponent from './UncontrolledComponent';
import HOC from './HOC';
import Home from './Home';
import About from './About';
import {Route, Routes} from 'react-router-dom'
import Nav from './Nav'
import PageNotFound404 from './PageNotFound404';
import DynamicRouting from './DynamicRouting'
import ApiGet from './ApiGet'
import ApiPost from './ApiPost'
import ApiDelete from './ApiDelete'
import PreFilledForm from './PreFilledForm'
import ApiPut from './ApiPut';
import PreciousState from './PreciousState';
import PreciousProps from './PreviousProps';
import ContextApi from './ContextApi';
function App() {
  function getData()
  {
    alert('This is from parent class from props')
  }
  function recieveData(data)
  {
    alert('Name: ' + data.name + ' Email: '+ data.email)
  }
  const [name,setName]=useState('Umer')
  const [data,setData]=useState(0)
  const [toggle,setToggle]=useState(false)
  const users =[
    {name:'umer',email:'umer@test.com', address:[{house:'1',street:'Qazi'}]},
    {name:'asad',email:'asad@test.com', address:[{house:'2',street:'Qazi'}]},
    {name:'shahzad',email:'shahzad@test.com', address:[{house:'3',street:'Mukaram'}]},
]
  let inputRef=useRef(null)
  function updateRef()
  {
    inputRef.current.style.color='red'
  }
  return (
      <div className="App" >
      <h1 className='secondary'>Making Context API</h1>
      <ContextApi />
      <h1 className='secondary'>Getting Previous Value from props</h1>
      <PreciousProps count={data}/>
      <button onClick={()=>setData(data+1)}>Update</button>
      <h1 className='secondary'>Getting Previous Value from State</h1>
      <PreciousState />
      <h1 className='secondary'> Using API PUT</h1>
      <ApiPut />
      <h1 className='secondary'> Using Pre-Filled Form</h1>
      <PreFilledForm />
      <h1 className='secondary'> Using API Delete</h1>
      <ApiDelete />
      <h1 className='secondary'> Using API POST</h1>
      <ApiPost />
      <h1 className='secondary'> Using API GET Call</h1>
        <ApiGet />
      <h1 className='secondary'> Using Dynamic ROUTING with params</h1>
      <DynamicRouting />
      <h1 className='secondary'> Using ROUTING</h1>
      <p>CONVERT component to pages with attached links to a specific URL to open the page  </p>
      <p>Install : npm install react-router-dom</p>
        <Nav/>  
        <Routes>
          {/* <Switch> */}
            <Route path='/' exact={true} element={<Home />}></Route>
            <Route path='/about'  element={<About />}></Route>
            <Route path='*'  element={<PageNotFound404 />}></Route>
        {/* </Switch> */}
        </Routes>
      {/* <Bro>
        <Routes>
          <Route path = "/" element={<Home />}>
          </Route>
        </Routes>
      </Bro> */}
      <h1 className='secondary'> Using high Order Component</h1>
      <p>HOC is simple component used to take compenent as a input and return the compenent </p>
      <p>Both Controlled Un-Controlled component are  used in class asa well as functional compenent</p>
      <HOC />
      <h1 className='secondary'> Using Un-Controlled component  </h1>
      <p>Un-Controlled component are Controlled through the React DOM and ref's</p>
      <p>Both Controlled Un-Controlled component are  used in class asa well as functional compenent</p>
      <UncontrolledComponent />
      <h1 className='secondary'> Using Controlled component  </h1>
      <p>Controlled component are Controlled through the React js state</p>
      <ControlledComponent />
      <h1 className='secondary'> Using forwardRef Hook in functional component  </h1>
      <p>This is used to change in DOM from parent to child component</p>
      <ForwardRefHook ref={inputRef}/>
      <button onClick={()=>updateRef()}>update Input</button>
      <h1 className='secondary'> Using useRef Hook in functional component </h1>
      <p>This is used to change in DOM with in a component</p>
      <UseRefHook />
      <h1 className='secondary'> Using createRef in Class component </h1>
      <RefinReact />
      <h1 className='secondary'> Using useMemo Hook in functional component </h1>
      <UseMemoHook data={data}/>
      <h1 className='secondary'> Using PureComponent </h1>
      <PureComponent data={data}/>
      <h1 className='secondary'> Sending Data from Child to parent</h1>
      <ChildParaentData alert={recieveData}/>
      <h1 className='secondary'> React Fragment</h1>
      <p>React Frangments are used to wrap the tags and components</p>
      <ReactFragment />
      <h1 className='secondary'> Reusing compenent</h1>
      {
        users.map(data=>
          <ReuseComponent users={data}/>
          )
      }
      <h1 className='secondary'> Using Nested Arrays, objects with map</h1>
       <ListWithNested />
      <h1 className='secondary'> Using Arrays, objects with map and loop</h1>
       <MapForLoop />
      <h1 className='primary'> Using Style with CSS</h1>
      <Row className="mx-0">
        <Button  variant="primary">Button</Button>
        <Button  variant="secondary" className="mx-2">Button</Button>
        <Button  variant="success">Button </Button>
      </Row>
      <h1 style={{backgroundColor:'LightBlue'}}> Using useEffect with specific state and props</h1>
      <UseEffectSpecificStateProps name={name} data={data}/>
      <Button onClick={()=>setName('Umer niaz')}>Update name</Button>
      <Button onClick={()=>setData(data+1)}>Update data</Button>
      <h1 style={{backgroundColor:'LightBlue'}}> Using useEffect with state and props</h1>
      <UseEffectStateProps />
      <h1 style={{backgroundColor:'LightBlue'}}> Using hooks in functional component (useEffect)</h1>
      <p>Hooks are used in a functional component to access the features of class component</p>
      <UseEffectHooks />
      <h1 style={{backgroundColor:'LightBlue'}}> Using ComponentWillUnmount Method</h1>
      {
        (toggle)? <ComponentWillUnmount />:<h2>Component removed</h2>
      }
      <button onClick={()=>setToggle(!toggle)}>unmount</button>
      <h1 style={{backgroundColor:'LightBlue'}}> Using ShouldComponentUpdate Method</h1>
      <ShouldComponentUpdate />
      <h1 style={{backgroundColor:'LightBlue'}}> Using ComponentDidUpdate Method</h1>
      <ComptDidUpdate />
      <h1 style={{backgroundColor:'LightBlue'}}> Using ComponentDidMount Method</h1>
      <ComptDidMount />
      <h1 style={{backgroundColor:'LightBlue'}}> Using Render Lifecycle Methods</h1>
      <RenderLSM name={name}/>
      <button onClick={()=>setName('Props Updated : Umer Niaz')}>Update Name</button>
      <h1 style={{backgroundColor:'LightBlue'}}> Using Constructor Lifecycle Methods</h1>
      <ConstructorLSM />
      <h1 style={{backgroundColor:'LightBlue'}}> Using Lifecycle Methods</h1>
      <LifecycleMethods />
      <h1 style={{backgroundColor:'LightBlue'}}> Using props to pass function</h1>
      <PropsFun data={getData}/>
      <h1 style={{backgroundColor:'LightBlue'}}> Using if else Conditions</h1>
      <Conditions />
      <h1 style={{backgroundColor:'LightBlue'}}> Using Forms</h1>
      <FormsWthFun />
      <h1 style={{backgroundColor:'LightBlue'}}> Using Toggles Buttons</h1>
      <TogglesButtons/>
      <h1 style={{backgroundColor:'LightBlue'}}> Using Input Fields in Function</h1>
      <InputField />
      <h1 style={{backgroundColor:'LightBlue'}}> Using Props in Class</h1>
      <PropsInClass name="Umer"/>
      <h1 style={{backgroundColor:'LightBlue'}}> Using Props in function</h1>
      <PropsInFun name={'Umer'} email='umer@mail.com' other={{address:'QA 1075', mobile:'0324234'}}/>
      <h1 style={{backgroundColor:'LightBlue'}}> Using state in function</h1>
      <StateFun />
      <h1 style={{backgroundColor:'LightBlue'}}> Using state in class</h1>
      <StateClass/>
      <h1 style={{backgroundColor:'LightBlue'}}> The user component</h1>
      <User/>      
    </div>
  );
}
// function Home() {
//   return <h2>Home</h2>;
// }
export default App;
