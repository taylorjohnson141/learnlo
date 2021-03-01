import React, { Component } from 'react'
import {getWord} from '../fetchCalls/fetchCalls'
import './SearchBar.css'
import PropTypes from 'prop-types';
import SearchIcon from '../images/search.svg'

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
      return(
        <>
        <form data-testid='form' className ='word-form' onSubmit ={this.handleSubmit}>
        <h1 className = 'home-header'>Learn Spanish Fast!</h1>

          <label>
            <input placeholder ='Translate English or Spanish' data-testid='form-input'className ='word-input'type="text" value = {this.state.currentWord} onChange = {this.handleChange} />
            <img  tabIndex ={0} src = {SearchIcon} className = 'search-button' onClick ={this.handleSubmit}Search for word/>
          </label>
          <h1 className = 'center'>
            {this.state.error}
          </h1>
        </form>
        </>
      )
    }
}
export default SearchBar;

SearchBar.propTypes = {
  addWord :PropTypes.func
}
