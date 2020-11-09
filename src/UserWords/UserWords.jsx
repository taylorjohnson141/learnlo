import React from 'react';
import Word from '../Word/Word';
import './UserWords.css';
import SearchBar from '../SearchBar/SearchBar';

function UserWords(props) {
  if (props.words.length === 0) {
    return (
      <section>
        <SearchBar addWord={props.addWord} />
        <h1 className="center">No Words Yet!</h1>
      </section>
    );
  }
  const wordsDisplay = props.words.map(word =>{
    return <div><Word deleteWord = {props.deleteWord} currentWord = {word}/></div>
  });
  return (
    <section>
      <SearchBar addWord={props.addWord} />
      <section className="words-container">
        {wordsDisplay}
      </section>
    </section>
  );
}
export default UserWords