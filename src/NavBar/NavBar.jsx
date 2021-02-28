import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import logo from '../images/Learnlo.png'
function NavBar() {
  return (
    <section className="nav-container">
      <img src ={logo} alt= 'Learnlo logo' className = 'logo'/>
      <NavLink className="link" to="/">Home</NavLink>
      <NavLink className="link" to="/myWords">My Words</NavLink>
      <NavLink className="link" to="/quiz">Quiz </NavLink>
    </section>
  );
}
export default NavBar;
