import {NavLink} from 'react-router-dom'
import './NavBar.css'
function NavBar(){
return (
  <section className = 'nav-container'>
    <NavLink className = 'link' to="/myWords">My Words</NavLink>
    <NavLink className = 'link' to="/">Home</NavLink> 
    <NavLink className = 'link' to="/quiz">Quiz </NavLink>
  </section>
)
}
export default NavBar