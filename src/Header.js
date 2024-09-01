import React from 'react'
import './Header.css'
import logo from './images/logo.png'
import phone from './images/phone.png'
import location from './images/location.png'
import clock from  './images/clock.png'


function Header() {
  return (
    <div>
    <div className='align'>
      <div className='elements'>
      <div className='contact'> 
        <img className='icons' src={location}></img>
        <h3>Sydney, Austrailia</h3>
      </div>
      <div className='contact'>
      <img className='icons' src={phone}></img>
        <h3>0468328227</h3>
      </div>
      <div className='contact'>
      <img className='icons' src={clock}></img>
        <h3>Mon - Fri: 9:00am - 5:00pm</h3>
      </div>
      <div className='contact'>
       <img className='icons' src={clock}></img>
        <h3>Weekends Appointments Only</h3>
      </div>
      </div>
      </div>
      <div className='header'>
      <div className='logo'>
        {/* <h2>Logo</h2> */}
        <img src={logo} alt='logo'></img>
      </div>
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Services</li>
        <li>FAQ</li>
        <li className='button'>Call us AnyTime</li>
      </ul>
      </div>
    </div>
  )
}

export default Header
