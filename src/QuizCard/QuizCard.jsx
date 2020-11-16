import React from 'react';
import './QuizCard.css';
import PropTypes from 'prop-types';
import shuffle from '../tools/shuffleArray'

function QuizValues (){
  return [
      { value: "", correct: true },
      { value: "", correct: false },
      { value: "", correct: false },
      { value: "", correct: false },
    ] 
}
function QuizList(
  changeCurrentWord,
  incrementScore,
  decrementScore,
  favoriteWords,
  currentWord
  ){
 let options  =  QuizValues()
 shuffle(options)
 console.log(options)
 return options.map((word,idx) =>{
   if(idx == favoriteWords.indexOf(currentWord) && idx !== 0){
     idx =0
   }
   else if (idx === 0){
     idx =1
   }
   if(word.correct){
     word.value = currentWord
   }
   console.log(currentWord)
   return  <button
   key ={idx}
   type="button"
   className="button"
   onClick={() => {
    word.correct
    ? incrementScore()
    : decrementScore()
    changeCurrentWord();
   }}>
   {word.correct
    ? word.value.shortdef[0]
    : favoriteWords[idx].shortdef[0]
  }
 </button>
 })
}
function QuizCard({currentWord,changeCurrentWord,incrementScore,decrementScore,favoriteWords}) {
  return (
    <section className="quiz-card">
      <h1 className="question">
        What is the English translation of {currentWord.hwi.hw}?
      </h1>
      <section className="button-section">
      {QuizList(changeCurrentWord,
  incrementScore,
  decrementScore,
  favoriteWords,
  currentWord
  )}
    </section>
    </section>
  );
}
export default QuizCard;

QuizCard.propTypes = {
  changeCurrentWord : PropTypes.func,
  currentWord :PropTypes.object
}
