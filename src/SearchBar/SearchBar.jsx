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
      const lang = navigator.language
      let userLang;
      let searchBarMessage
      if(lang.includes('en')){
        userLang = 'Learn Spanish Fast!'
        searchBarMessage ='Translate English or Spanish'
      }else{
        userLang = 'Aprender Inglés rápido!'
        searchBarMessage = 'Traducir Español o Inglés'
      }
      return(
        <>
        <h1 className = 'home-header'>{userLang}</h1>
        <form data-testid='form' className ='word-form' onSubmit ={this.handleSubmit}>
          <label>
            <input placeholder ={searchBarMessage} data-testid='form-input'className ='word-input'type="text" value = {this.state.currentWord} onChange = {this.handleChange} />
            <img  tabIndex ={0} src = {SearchIcon} className = 'search-button' onClick ={this.handleSubmit}/>
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
