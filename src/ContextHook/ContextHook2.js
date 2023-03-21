import React from 'react';
import { useContext } from 'react';
import { Context1 } from './Context1';

function ContextHook2() {
    const value = useContext(Context1)
    return (
       <>
        <h1>In ContextHook2.js! {value}</h1> 
       </>
    )
  }

  export default ContextHook2;