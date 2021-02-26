import React, { Component } from 'react'
import {getWord} from '../fetchCalls/fetchCalls'
import './SearchBar.css'
import PropTypes from 'prop-types';


class SearchBar extends Component{
  constructor(){
    super()
    this.state = {
     currentWord :'',
     word:null,
     error:''
    }
  }
  handleChange = (event) =>{
    if(this.state.error){
      this.setState({error:''})
    }
    this.setState({currentWord:event.target.value})
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    let definition = await getWord(this.state.currentWord)
    this.setState({
      currentWord: ''
    });
    if(typeof definition !== 'object'){
      this.setState({error:`Sorry we could not find that word!`})
      return
    }
   
      this.props.displayWord(definition)
  }
    render(){
      console.log(this.state.error)
      return(
        <form data-testid='form' className ='word-form'>
          <label>
            <input placeholder ='Translate English or Spanish' data-testid='form-input'className ='word-input'type="text" value = {this.state.currentWord} onChange = {this.handleChange} />
            <button className = 'search-button'onClick ={this.handleSubmit}> Search for word</button>
          </label>
          <h1 className = 'center'>
            {this.state.error}
          </h1>
        </form>
      )
    }
}
export default SearchBar;

SearchBar.propTypes = {
  addWord :PropTypes.func
}
