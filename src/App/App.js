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
  addWord = (word) =>{
    this.setState({favoriteWords:[...this.state.favoriteWords,word]})
  }
  render() {
   return( <section>
     <header>Learnlo!</header>
   <NavBar/>
   {/* <Route exact path='/'>
     <HomeScreen/>
    </Route>
   */}
   <Route path = '/search'>
    <SearchBar addWord = {this.addWord}/>
   </Route> 
   <Route path = '/myWords' render = {() =>{
    return <UserWords addWord = {this.addWord} words = {this.state.favoriteWords}/>
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
