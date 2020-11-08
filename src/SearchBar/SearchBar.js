import React, { Component } from 'react'
import {getWord} from '../fetchCalls/fetchCalls'
import Word from '../Word/Word'
import './SearchBar.css'
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

  handleSubmit = async (event) =>{
    event.preventDefault()
    let definition = await getWord(this.state.currentWord)
    this.setState({
      currentWord: ''
    });
    console.log(this.props)
    this.props.addWord(definition)
  }
  render(){
   
    
    return(
      <form className ='word-form' onSubmit = {this.handleSubmit}>
        <label>
          Input a word would you like to Study!
          <input class ='word-input'type="text" value = {this.currentWord} onChange = {this.handleChange} />
      </label>
      </form>
    )
  }
}
export default SearchBar