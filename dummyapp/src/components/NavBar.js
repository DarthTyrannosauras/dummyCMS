import React from 'react'
import { NavLink } from 'react-router-dom'
// import logoImg from '../assets/images/diet.png'
 import { ReactComponent as Icon } from '../assets/images/noun-food-17562.svg';
//  import { ReactComponent as Icon } from '../assets/images/diet.png';
export default function MainNavBar() {
  return (
    <div>

        
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary ">
    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          {/* <NavLink  className="nav-link" to="/table"> nasdind<span className="sr-only">current</span></NavLink> */}
          <Icon style={logo}/>
        </li>
        <li className="nav-item active">
          <NavLink className="nav-link" to="/table">about us <span className="sr-only">current</span></NavLink>
        </li>
        <li className="nav-item active">
          <NavLink className="nav-link" to="/form">contact</NavLink>
        </li>
        <li className="nav-item active">
          <NavLink className="nav-link" to="/list">login</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link " to="/">Disabled</NavLink>
        </li> */}
        
        
      </ul>
      
    </div>
  </nav></div>
  )
}

const navbarcss = {
    background: "#222"
}
const logo = {
    width: '8vmin',
    height: '8vmin'
}