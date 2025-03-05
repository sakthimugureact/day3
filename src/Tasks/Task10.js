import React from 'react'
import Task10Child from './Task10Child'

function Task10() {
  return (
    <>
    <h1 style={{textAlign:'center'}}>Task 10</h1>
    <h2 style={{textAlign:'center'}}>This is parent functional component</h2>
    <Task10Child/>
    <hr/>
    </>
  )
}

export default Task10