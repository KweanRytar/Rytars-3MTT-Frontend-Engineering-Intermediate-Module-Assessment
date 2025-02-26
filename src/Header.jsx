import React from 'react'
import passport from './assets/RYTARS PASSPORT.jpg'
import {  Link } from 'react-router-dom'


const Header = () => {
  return (
    <div>
<h3 className='title'>Rytar's Project</h3>
        
<div className='headermenu'>
<img src={passport} className='logo' alt='passport'/>

<div>
    <input className='search' type="text" placeholder="Search.."/>
    <button className='searchBtn'>Search</button>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About me</Link></li>
        <li>
        <a href="https://github.com/kweanRytar" target="_blank">My GitHub</a>
        </li>
      </ul>
       
       
    </nav>
    </div>
</div>

</div>
    
  )
}

export default Header