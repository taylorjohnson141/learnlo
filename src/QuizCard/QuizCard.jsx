import React from 'react';
import './QuizCard.css';
import PropTypes from 'prop-types';
import shuffle from '../tools/shuffleArray'
import {useState} from 'react'

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
  currentWord,
  upDateMessage
  ){
    let [buttonDisabled, updateButton] = useState(false)
 let options  =  QuizValues()
 shuffle(options)
 if(favoriteWords.length<4){
   return <span>Please Add at Least 4 words to Study!</span>
 }
 return options.map((word,idx) =>{
  
   if(word.correct){
     word.value = currentWord
   }
   let text;
   if(currentWord && currentWord.shortdef[0] === favoriteWords[idx].shortdef[0]){
     text = 'super'
   }
   else {
     text = favoriteWords[idx].shortdef[0]
   }
   return  <button
   let disabled = {buttonDisabled}
   key ={idx}
   type="button"
   className="button"
   onClick={() => {
    setTimeout(function(){
    word.correct
    ? incrementScore()
    : decrementScore()
    upDateMessage('')
    changeCurrentWord()
    updateButton(false)
    }, 2000);
    updateButton(true)
    word.correct
    ? upDateMessage('Great Job!')
    : upDateMessage(`Sorry That isn't correct the correct answer is ${currentWord.shortdef[0]}`)
   
   }}>
   {word.correct
    ? word.value.shortdef[0]
    : text
  }
 </button>
 })
}
function QuizCard({currentWord,changeCurrentWord,incrementScore,decrementScore,favoriteWords}) {
  let [userAnswerMessage, upDateMessage] = useState('')
  let language;
  if(currentWord.meta.lang === 'en'){
    language = 'Spanish'
  } else{
    language = 'English'
  }
  return (
    <section className="quiz-card">
      {favoriteWords.length < 4 
       ? <span>Please Add at Least 4 words to Study!</span> 
       : <>
       <h1 className="question">
          What is the {`${language}`} translation of {currentWord.hwi.hw}?
        </h1>
        <section className="button-section">
          {QuizList(changeCurrentWord,
            incrementScore,
            decrementScore,
            favoriteWords,
            currentWord,
            upDateMessage,
                  )
          }
        </section>
        <p> {userAnswerMessage}</p>
        </>
      }
   </section>
  );
}
export default QuizCard;

QuizCard.propTypes = {
  changeCurrentWord : PropTypes.func,
  currentWord :PropTypes.object
}