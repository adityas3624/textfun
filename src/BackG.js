import React, { useState } from 'react'
import './BackG.css'

export default function BackG() {
  const[text,setText]=useState('');
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  let t;
  if(text.length===0 ||text.charAt(text.length-1)===' '){
    t=text.split(' ').length-1;
    }
    else{
      t=text.split(' ').length;
    }
  const handleCl=()=>{
    setText('');
  }
  const handleUp=()=>{
    const new1=text.toUpperCase();
    setText(new1);
  }
  const handleLow=()=>{
    const new1=text.toLowerCase();
    setText(new1);
  }
  return (
    <div className="back">
      <div className="point">
        <div className='container'>
          <h3 className='he1'>Enter Text Below</h3>
        </div>
        <div className='container'>
          <textarea name="text" id="text" cols="65" rows="10" value={text} onChange={handleOnChange}></textarea>
        </div>
        <div className="buttons">
        <button className="button1" onClick={handleUp}>Change To Uppercase</button>
        <button className="button1" onClick={handleLow}> Change To Lowercase</button>
        <button className="button1" onClick={handleCl}>Clear Text</button>
      </div>
      <h3 className='hea my-2'>Text Parameters</h3>
      <div className="words">
        <p>Number of Words ={t}<br/>Number of letters={text.length}</p>
      </div>
      </div>
    </div>
  )
}
