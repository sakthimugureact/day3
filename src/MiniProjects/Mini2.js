import React from 'react'

function Mini2() {
    const time = new Date();
    const changetime = time.toLocaleString();
  return (
    <>
    <h1 style={{textAlign:'center'}}>Mini Project - 2</h1>
    <h2 style={{textAlign:'center'}}>Live Clock</h2>
    <h5 style={{textAlign:'center'}}>{changetime}</h5>
    <hr/>
    </>
  )
}

export default Mini2