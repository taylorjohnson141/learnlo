import React from 'react';
import Word from '../Word/Word';
import './UserWords.css';
import PropTypes from 'prop-types';


function WordList({words,deleteWord}){
  return words.map((word,index)=>{
    return <div key = {index}><Word  deleteWord = {deleteWord} currentWord = {word}/></div>
  });
}

function UserWords({words,addWord,deleteWord}) {
  return (
    <section>
      {words.length !==0 && 
      <section className="words-container">
        <WordList words = {words} addWord = {addWord} deleteWord = {deleteWord} />
      </section>}
    </section>
  );
}

UserWords.propTypes = {
  addWord :PropTypes.func,
  deleteWord:PropTypes.func,
  words:PropTypes.array
}

export default UserWords
