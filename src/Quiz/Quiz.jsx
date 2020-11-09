import React, { Component } from 'react'
import './Quiz.css'
import QuizCard from '../QuizCard/QuizCard'
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
  changeCurrentWord = (boolean) =>{

    this.setState({turn:this.state.turn += 1})
    if(boolean){
      this.setState({score:this.state.score +=1})
    }
    else{
      this.setState({wrong:this.state.wrong -=1})
    }
    if(this.state.turn === this.state.turnLength){
      console.log('this is the end')
      console.log(((this.state.score - this.state.wrong) / this.state.turnLength) *100)
      this.setState({finalScore:((this.state.score / this.state.turnLength) *100)}) 
      console.log('pls work',this.state)

      return 
    }
    else{
      console.log('why are you running', this.state.turn)
      this.setState({currentWord:this.props.favoriteWords[this.state.turn]})
    }
  }
  componentDidMount = () =>{
    this.setState({turnLength:this.props.favoriteWords.length})
    this.setState({currentWord:this.props.favoriteWords[this.state.turn]})
  }
  render(){
    if(this.state.finalScore){
      return <h1 className = 'center-stuff'>Your final score is {this.state.finalScore}%</h1>
    }
    if(!this.state.currentWord  ){
      console.log('pls work',this.state.finalScore)
      return <h1 className = 'center-stuff'>No Words to Study Yet!</h1> 
    }
    
    return (
      <QuizCard changeCurrentWord = {this.changeCurrentWord} currentWord = {this.state.currentWord}/>
    )
  }
}
export default Quiz