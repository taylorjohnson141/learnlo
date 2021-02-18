import React from 'react';
import SearchBar from '../SearchBar/SearchBar'
import './HomeScreen.css';

function HomeScreen(props) {
  return (
    <section>
       <SearchBar addWord={props.addWord} />
       {/* need a word and definition here */}
    </section>
  );
}
export default HomeScreen;
