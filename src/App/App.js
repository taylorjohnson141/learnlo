import NavBar from '../NavBar/NavBar'
import {Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <section>
   <NavBar/>
   <Route exact path='/'>
     <HomeScreen/>
    </Route>
   <Route path = 'search'>
    <SearchBar/>
   </Route>
   <Route path = 'myWords'>
    <UserWords/>
   </Route>
   <Route path = 'quiz'>
    <QuizArea/>
   </Route>
   </section>
  );
}

export default App;
