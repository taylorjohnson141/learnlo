import React, { Component } from 'react';
import './Quiz.css';
import PropTypes from 'prop-types';

import QuizCard from '../QuizCard/QuizCard';

class Quiz extends Component {
  constructor(){
    super()
    this.state = {
      score:0,
      currentWord :'',
      turn:0,
      turnLength:0,
      finalScore :'',
      wrong:0
    } 
  }
  incrementScore = () =>{
    this.setState({score:this.state.score +1})

  }
  decrementScore = () =>{
    this.setState({wrong:this.state.wrong - 1})

  }
  changeCurrentWord = async (boolean) =>{

     await this.setState(prevState =>{
       console.log(prevState)
       return{
       turn:prevState.turn + 1
       }
      })

    if(this.state.turn === this.state.turnLength){
      this.setState({finalScore:((this.state.score / this.state.turnLength) *100)}) 
      return 
    }else{
      console.log('hello',this.state.turn)
      this.setState({currentWord:this.props.favoriteWords[this.state.turn]})
    }
  }
  componentDidMount = () =>{
    this.setState({turnLength:this.props.favoriteWords.length})
    this.setState({currentWord:this.props.favoriteWords[this.state.turn]})
  }
  render(){
    if(this.state.finalScore ||this.state.finalScore ===0 ){
      return <h1 className = 'center-stuff'>Your final score is {this.state.finalScore}%</h1>
    }
    if(!this.state.currentWord){
      return <h1 className = 'center-stuff'>No Words to Study Yet!</h1> 
    }
    return (
      <QuizCard incrementScore ={this.incrementScore} decrementScore = {this.decrementScore} favoriteWords = {this.props.favoriteWords}changeCurrentWord = {this.changeCurrentWord} currentWord = {this.state.currentWord}/>
    )
  }
}

export default Quiz

Quiz.propTypes = {
  favoriteWords:PropTypes.array
}
