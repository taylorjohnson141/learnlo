import React from 'react';
import Word from '../Word/Word';
import './UserWords.css';
import PropTypes from 'prop-types';

import SearchBar from '../SearchBar/SearchBar';

function WordList({words,deleteWord}){
  return words.map((word,index)=>{
    return <div key = {index}><Word  deleteWord = {deleteWord} currentWord = {word}/></div>
  });
}

function UserWords({words,addWord,deleteWord}) {
  return (
    <section>
      <SearchBar addWord={addWord} />
      {words.length && 
      <section className="words-container">
        <WordList words = {words} addWord = {addWord} deleteWord = {deleteWord} />
      </section>}
    </section>
  );
}
export default UserWords
UserWords.propTypes = {
  addWord :PropTypes.func,
  deleteWord:PropTypes.func,
  words:PropTypes.array
}
