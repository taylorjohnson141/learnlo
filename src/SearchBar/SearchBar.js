import React, { Component } from 'react'
import {getWord} from '../fetchCalls/fetchCalls'
import Word from '../Word/Word'
class SearchBar extends Component{
  constructor(){
    super()
    this.state = {
     currentWord :'',
     word:null
    }
  }
  handleChange = (event) =>{
    this.setState({currentWord:event.target.value})
  }
  handleSubmit = (event) =>{
    event.preventDefault()
    getWord(this.state.currentWord)
    .then( definition => this.setState({word:definition})
    )
  }
  render(){
    return(
      <form onSubmit = {this.handleSubmit}>
        <label>
          Input a word would you like to Study!
          <input type="text" value = {this.currentWord} onChange = {this.handleChange} />
      </label>
      <Word currentWord = {this.state.word}></Word>
      </form>
    )
  }
}
export default SearchBar