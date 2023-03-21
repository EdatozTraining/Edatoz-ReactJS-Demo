import React from 'react';

function Component1(props) {
    function handleChange(e) {
        var val = e.target.value
        props.setCompanyName(val)
    }
    return (
        <>
            <hr></hr>
            <h1>Hello Component1 company: {props.companyName}</h1>
            <input type="text" onChange={handleChange} />
        </>
    )
}

export default Component1;