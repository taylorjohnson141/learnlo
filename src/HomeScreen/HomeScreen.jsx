import React from 'react';
import SearchBar from '../SearchBar/SearchBar'
import DefinitionCard from '../DefinitionCard/DefinitionCard'
import './HomeScreen.css';

function HomeScreen(props) {
  return (
    <section className = 'homescreen'>
       <SearchBar displayWord = {props.displayWord} />
       {props.currentWord &&
      <DefinitionCard addWord={props.addWord} word = {props.currentWord}/>
       }
       {props.error && <section className = 'error'>
         {props.error}
         </section>}

    </section>
  );
}
export default HomeScreen;
