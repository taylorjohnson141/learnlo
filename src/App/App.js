import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import {Route} from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      words:[]
    }
  }
  render() {
   return( <section>
   <NavBar/>
   <Route exact path='/'>
     <HomeScreen/>
    </Route>
   <Route path = 'search'>
    <SearchBar/>
   </Route>
   <Route path = 'myWords' render = {() =>{
    <UserWords words = {this.props.words}/>
   }}>
    
   </Route>
   <Route path = 'quiz'>
    <QuizArea/>
   </Route>
   </section>
   )
}
}

export default App;
