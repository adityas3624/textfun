import React, { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [text, settext] = useState('');

  const handleSearch=()=>{
      settext('');
  }
  const handleOnChange=(event)=>{
    settext(event.target.value);
  }
  return (
    <div className='contain'>
      <div className="h">
        <a className='link' href='/'>TextFun</a>
      </div>
      <div className="ho">
        <a className="home" href='/'>Home</a>
      </div>
      <div className="ab">
        <a className="about" href='/'>About</a>
      </div>
      <div className="se">
        <form >
          <input className='search' type="text" value={text} onChange={handleOnChange}/>
        </form>
      </div>
      <div className="bu">
        <button className="button" onClick={handleSearch} >Search</button>
      </div>
    </div>
  )
}
