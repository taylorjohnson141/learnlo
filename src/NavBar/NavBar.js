import {Route,Link} from 'react-router-dom'
function NavBar(){
return (
  <section>
    <Link to="/search"/> 
    <Link to="/myWords"/>
    <Link to="/"/> 
    <Link to="/Quiz"/> 

  </section>
)
}
export default NavBar