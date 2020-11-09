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
      favoriteWords:[],
      error:''
    }
  }
  deleteWord = (currentWord) =>{
    let indexOfCurrentWord = this.state.favoriteWords.indexOf(currentWord)
    let copyOfState = [...this.state.favoriteWords]
     copyOfState.splice(indexOfCurrentWord,1)
    this.setState({favoriteWords:copyOfState})
  }
  addWord = (word) =>{

   let wordDuplicate = this.state.favoriteWords.find(favWord =>{
      return favWord.meta.id === word.meta.id
    })
    if(wordDuplicate){
      this.setState({error:'You already have this word, please find a different word'})
      return
    }
    this.setState({error:''})

    this.setState({favoriteWords:[...this.state.favoriteWords,word]})
  }
  render() {
   return( <section>
     <header className = 'header'>Learnlo!</header>
   <NavBar/>
   {/* <Route exact path='/'>
     <HomeScreen/>
    </Route>
   */}
   <Route path = '/search'>
    <SearchBar addWord = {this.addWord}/>
   </Route> 
   <Route path = '/myWords' render = {() =>{
    return <UserWords addWord ={this.addWord} deleteWord = {this.deleteWord} words = {this.state.favoriteWords}/>
   }}>
    </Route>
    {this.state.error}

   {/* 
   <Route path = 'quiz'>
    <QuizArea/>
   </Route> */}
   </section>
   )
}
}

export default App;
