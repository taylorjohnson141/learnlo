import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import {Route} from 'react-router-dom'
import UserWords from '../UserWords/UserWords'
import Quiz from '../Quiz/Quiz'
import HomeScreen from '../HomeScreen/HomeScreen'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      favoriteWords:[],
      currentWord:'',
      error:''
    }
  }
  deleteWord = (currentWord) => {
    let indexOfCurrentWord = this.state.favoriteWords.indexOf(currentWord)
    let copyOfState = [...this.state.favoriteWords]
    copyOfState.splice(indexOfCurrentWord,1)
    this.setState({favoriteWords:copyOfState})
  }
  displayWord = (word) =>{
    console.log(word)
    this.setState({currentWord:word})
  }
  addWord = (word) =>{
    console.log(word)
   let wordDuplicate = this.state.favoriteWords.find(favWord =>{
     console.log()
      if(favWord.meta.id === word.meta.id || favWord.shortdef[0] === word.hwi.hw){
        return false
      } 
      return true
    })
    if(wordDuplicate){
      this.setState({error:'You already have this word. Please find a different word'})
      return
    }
    this.setState({error:''})
    this.setState({favoriteWords:[...this.state.favoriteWords,word]})
  }
  render() {
   return( 
   <section>

     <NavBar/>

     <Route exact path='/'
        render = {() =>{
          return <HomeScreen displayWord = {this.displayWord} addWord ={this.addWord} currentWord = {this.state.currentWord}/>
        }}>
      </Route>
      
      <Route path = '/myWords' 
        render = {() =>{
          return <UserWords deleteWord = {this.deleteWord} words = {this.state.favoriteWords}/>
        }}>
      </Route>

      <h1 className = 'center'>{this.state.error}</h1>

      <Route path = '/quiz' 
        render ={() =>{
          return <Quiz favoriteWords = {this.state.favoriteWords}/>
        }}>
      </Route>

   </section>
   )
  }
}

export default App;
///This is to show it works