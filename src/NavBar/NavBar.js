import {NavLink} from 'react-router-dom'
import './NavBar.css'
function NavBar(){
return (
  <section className = 'nav-container'>
    <NavLink className = 'link' to="/search">Search For a Word</NavLink>
    <NavLink className = 'link' to="/myWords">My Words</NavLink>
    <NavLink className = 'link' to="/">Home</NavLink> 
    <NavLink className = 'link' to="/quiz">Quiz yourself on your words</NavLink>

  </section>
)
}
export default NavBar