import React, { useState } from 'react';
import { useContext } from 'react';
import './App.css';
import ContextHook1 from './ContextHook/ContextHook1';
import ContextHook2 from './ContextHook/ContextHook2';
import { Context1 } from './ContextHook/Context1';
import Component1 from './LiftingStateUp/Component1.js';
import Increment from './Props/Increment';
import Component2 from './LiftingStateUp/Component2';

function App() {
  const [companyName, setCompanyName] = useState("EdatozABC")
  return (  
    <>
      <h1>In App.js, company: {companyName}</h1>
      <Component1 
        companyName = {companyName} 
        setCompanyName = {setCompanyName}
        ></Component1>
      <Component2 companyName = {companyName}></Component2>
    </>
  );

  // var company_name = "Edatozzz"

  // return (  
  //   <>
  //     <h1>Welcome, I am in App.js</h1>
  //     <h2>In App.js, company: {company_name}</h2>
  //     <Increment companyName={company_name} companyLocation="Vizag"></Increment>
  //   </>
  // );


  // var value = useContext(Context1)
  // value = value + "Jai"
// function App() {
//   var value = useContext(Context1)
//   value = value + "Jai"
//   return (  
//     <Context1.Provider 
//       value={value + " Vishnu"}
//     >
//       <h1>In App.js</h1>
//       <Component1></Component1>
//       <ContextHook1 />
//       <ContextHook2 />
//     </Context1.Provider>
//   );
}

export default App;
