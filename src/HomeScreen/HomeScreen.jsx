import React from 'react';
import SearchBar from '../SearchBar/SearchBar'
import './HomeScreen.css';

function HomeScreen(addWord) {
  return (
    <section>
       <SearchBar addWord={addWord} />
    </section>
  );
}
export default HomeScreen;
