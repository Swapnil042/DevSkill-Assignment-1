import React from 'react';

const MyComponent = (props)=>{
    return(
        <>
            <h1>{props.pageName}</h1>
            <p>{props.pageInfo}</p>
        </>
    )
}

export default MyComponent;