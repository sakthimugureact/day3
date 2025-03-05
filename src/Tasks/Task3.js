import React from 'react'

function Task3() {
  return (
    <>
    <h1 style={{textAlign:'center'}}>Task 3</h1>
    <One/>
    <Two/>
    <Three/>
    <Four/>
    <hr/>
    </>
  )
}

function One(){
    return(
        <>
        <h2 style={{textAlign:'center'}}>This is first function component</h2>
        </>
    )
}

function Four(){
    return(
        <>
        <h2 style={{textAlign:'center'}}>This is fourth function component</h2>
        </>
    )
}

function Two(){
    return(
        <>
        <h2 style={{textAlign:'center'}}>This is second function component</h2>
        </>
    )
}

function Three(){
    return(
        <>
        <h2 style={{textAlign:'center'}}>This is third function component</h2>
        </>
    )
}

export default Task3