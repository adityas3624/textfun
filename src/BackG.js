import React, { useState } from 'react'
import './BackG.css'

export default function BackG() {
  function downloadFile(filename,content){
    const element =document.createElement('a');
    const blob =new Blob([content],{
      type:'plain/text'
    });
    const fileUrl=URL.createObjectURL(blob);
    element.setAttribute('href',fileUrl);
    element.setAttribute('download',filename);
    element.style.display='none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  window.onload=()=>{
    document.getElementById('dowload').addEventListener('click',e=>{
      const filename=document.getElementById('filename').value;
      const content=document.getElementById('text').value;
      if (filename&&content){
        downloadFile(filename,content);
      }
        });
  }
  const[text,setText]=useState('');
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  const[text1,setText1]=useState('');
  const handleOnChange1=(event)=>{
    setText1(event.target.value);
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
  // const download=(url)=>{
  //   document.getElementById('down').src = url;
  // }
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
      <div className="buttons my-2">
        <div>
        <form>
          <input className='button1' id='filename' type="text" value={text1} onChange={handleOnChange1} placeholder='Enter File Name with format'/>
        </form></div><div>
        <button className="button1" id='download' >Download Text</button>
        </div>
      </div>
      <h3 className='hea my-2'>Text Parameters</h3>
      <div className="words">
        <p>Number of Words ={t}<br/>Number of letters={text.length}</p>
      </div>
      </div>
    </div>
  )
}
