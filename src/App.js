import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Func from './func'
// import Class1 from './class1';
// import Prop from './exprop'
import Card from './card';
import {BrowserRouter,Switch,Route}  from 'react-router-dom';
import Resume from './Resume';


function App() {
  const empdata=['shivangi','sirisha',"mohsin"]
  return (
    <div>
  <BrowserRouter basename={window.location.pathname || ''}>
    <Switch>
      <Route exact path='/' component={Idcard}/>
      <Route exact path='/resume' component={Resume}/>
      </Switch>   
  </BrowserRouter>
  </div>
  );
}


let Idcard=()=>{
  return (
    <div>
    <div  style={{color:'white',background:'#042e15',padding:'15px'}}>
    <h2 className="container">My first React Application</h2>
    </div>
    <div className="container">
    <Card className=" mt-5"></Card>
    </div>
    {/* <Func name='Student Data'></Func>
    <Class1 name="****student details****"></Class1>
      {empdata.map((value,index)=>(
        <Prop name={value} key1={index}></Prop>
      ))} */}
    
  </div>

  )
}


// let resume=()=>{
//   return (
//     <div>
    
//     <div  style={{color:'white',background:'#042e15',padding:'15px'}}>
//     <h2 className="container">My first React Application</h2>
//     </div>
//     <div className="container mt-5">
//     <Resume className=" mt-5">
//     </Resume>
//     </div>
//     </div>
//   )
// }

export default App;
