import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import {Route} from 'react-router-dom'
import UserWords from '../UserWords/UserWords'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      words:['hello','goodbye']
    }
  }
  render() {
   return( <section>
   <NavBar/>
   {/* <Route exact path='/'>
     <HomeScreen/>
    </Route>
   <Route path = 'search'>
    <SearchBar/>
   </Route> */}
   <Route path = '/myWords' render = {() =>{
    return <UserWords words = {this.state.words}/>
   }}>
    </Route>
   {/* 
   <Route path = 'quiz'>
    <QuizArea/>
   </Route> */}
   </section>
   )
}
}

export default App;
