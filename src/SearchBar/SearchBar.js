import React, { Component } from 'react'
class SearchBar extends Component{
  constructor(){
    super()
    this.state = {
     currentWord :''
    }
  }
  handleChange = (event) =>{
    this.setState({currentWord:event.target.value})
  }
  render(){
    return(
      <form onSubmit = {this.handleSubmit}>
        <label>
          Input a word would you like to Study!
          <input type="text" value = {this.currentWord} onChange = {this.handleChange} />
      </label>
      </form>
    )
  }
}