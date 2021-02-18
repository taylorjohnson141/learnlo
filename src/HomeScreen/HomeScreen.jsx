import React from 'react';
import SearchBar from '../SearchBar/SearchBar'
import DefinitionCard from '../DefinitionCard/DefinitionCard'
import './HomeScreen.css';

function HomeScreen(props) {
  return (
    <section>
       <SearchBar displayWord = {props.displayWord} />
       {props.currentWord &&
    <DefinitionCard addWord={props.addWord} word = {props.word}/>
       }
       {/* need a word and definition here */}
    </section>
  );
}
export default HomeScreen;
