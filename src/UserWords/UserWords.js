import React from 'react'
import Word from '../Word/Word'
import './UserWords.css'
import SearchBar from '../SearchBar/SearchBar'
function UserWords (props){
  if(props.words.length === 0){
    
    return (
      <section>
      <SearchBar addWord = {props.addWord}/>
    <h1>Add a word!</h1>
    </section>

    )
  }
  let wordsDisplay = props.words.map(word =>{
    return <div><Word deleteWord = {props.deleteWord} currentWord = {word}/></div>
  })
  return(
    <section>
    <SearchBar addWord = {props.addWord}/>
    <section class = 'words-container'>
      {wordsDisplay}
    </section>
    </section>
  )
}
export default UserWords