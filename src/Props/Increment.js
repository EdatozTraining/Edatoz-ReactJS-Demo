import React, { useState } from 'react';

function Increment(props) {
    const [num2, setNum2] = useState(1)
    var num1 = 1

    props.companyName = "Microsoft"
    function handleClick() {
        num1 = num1 + 1
        setNum2(num2 + 1)
    }
    return (
       <>
        <h1>Hello,I am an Incrementer! num1={num1} num2={num2}</h1>
        <h2>Company: {props.companyName}</h2>
        <h3>Location: {props.companyLocation}</h3>
        <button onClick={handleClick}>Click Me</button>
       </>
    )
  }
export default Increment;