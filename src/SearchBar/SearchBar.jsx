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
  handleChange =  (event) =>{
    if(this.state.error){
      this.setState({error:''})
    }
    this.setState({currentWord:event.target.value})

  }

  handleSubmit = async (event) => {
    event.preventDefault()
    let definition = await getWord(this.state.currentWord)
    if(typeof definition !== 'object'){
      this.setState({error:`Sorry we could not find that word!`})
      return
    }
    this.setState({
      currentWord: ''
    });
    if(definition.meta.lang === 'en'){

      this.setState({error:'Please Type in a Spanish Word'})
      return 
    }
      this.props.addWord(definition)
  }
    render(){
      console.log(this.state.error)
      return(
        <form data-testid='form' className ='word-form' onSubmit = {this.handleSubmit}>
          <label>
            Input a word you would like to Study!
            <input data-testid='form-input'className ='word-input'type="text" value = {this.currentWord} onChange = {this.handleChange} />
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
