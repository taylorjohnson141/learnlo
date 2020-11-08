import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import SearchBar from '../SearchBar/SearchBar'
import {Route} from 'react-router-dom'
import UserWords from '../UserWords/UserWords'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      favoriteWords:[]
    }
  }
  render() {
   return( <section>
   <NavBar/>
   {/* <Route exact path='/'>
     <HomeScreen/>
    </Route>
   */}
   <Route path = '/search'>
    <SearchBar/>
   </Route> 
   <Route path = '/myWords' render = {() =>{
    return <UserWords words = {this.state.favoriteWords}/>
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
