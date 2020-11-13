import React from 'react';
import './QuizCard.css';
import PropTypes from 'prop-types';


function QuizCard(props) {
  return (
    <section className="quiz-card">
      <h1 className="question">
        What is the English translation of {props.currentWord.hwi.hw}?
      </h1>
      <section className="button-section">
        <button
          type="button"
          className="button"
          onClick={() => {
            props.changeCurrentWord(false);
          }}>
          Weird
        </button>
        <button
          type="button"
          className="button"
          onClick={() => {
            console.log('clicks')
            props.changeCurrentWord(true);
          }}>
          {props.currentWord.shortdef[0]}
        </button>
        <button
          type="button"
          className="button"
          onClick={() =>{
            props.changeCurrentWord(false);
          }}>
          No
        </button>
        <button
          type="button"
          className="button"
          onClick={() => {
            props.changeCurrentWord(false);
          }}>
          Something
        </button>
      </section>
    </section>
  );
}
export default QuizCard;

QuizCard.propTypes = {
  changeCurrentWord : PropTypes.func,
  currentWord :PropTypes.object
}
