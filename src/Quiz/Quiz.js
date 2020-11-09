import React, { Component } from 'react'
class Quiz extends Component {
  constructor(){
    super()
    this.state = {
      score:'',
      currentWord :'',
      turn:0,
      turnLength:''
    }
    
  }
  changeCurrentWord = () =>{
    if(this.state.turn === this.props.favoriteWord.length){
      return Math.floor(this.state.score /this.props.favoriteWord.lengths)
    }
    this.setState({turn:this.state.turn += 1})
    this.setState({currentWord:this.props.favoriteWord[this.state.turn]})
  }
  componentDidMount = () =>{
    this.setState({turnLength:this.props.favoriteWord.length})
    this.setState({currentWord:this.props.favoriteWord[this.state.turn]})
  }
  render(
    
  )
}