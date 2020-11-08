import {NavLink} from 'react-router-dom'
import './NavBar.css'
function NavBar(){
return (
  <section class = 'nav-container'>
    <NavLink to="/search">Search For a Word</NavLink>
    <NavLink to="/myWords">My Words</NavLink>
    <NavLink to="/">Home</NavLink> 
    <NavLink to="/quiz">Quiz yourself on your words</NavLink>

  </section>
)
}
export default NavBar