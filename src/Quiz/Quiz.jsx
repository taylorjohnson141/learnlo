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
       return{
       turn:prevState.turn + 1
       }
      })

    if(this.state.turn === this.state.turnLength){
      this.setState({finalScore:((this.state.score / this.state.turnLength) *100)}) 
      return 
    }else{
      this.setState({currentWord:this.props.favoriteWords[this.state.turn]})
    }
  }
  componentDidMount = () =>{
    this.setState({turnLength:this.props.favoriteWords.length})
    this.setState({currentWord:this.props.favoriteWords[this.state.turn]})
  }
  render(){
    if(this.state.finalScore ||this.state.finalScore ===0 ){
      let finalScoreLength = this.state.finalScore.toString().length
      
      return <h1 role ='final-score'className = 'center-stuff'>Your final score is {finalScoreLength > 4 ? this.state.finalScore.toFixed(2):this.state.finalScore}%</h1>
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
