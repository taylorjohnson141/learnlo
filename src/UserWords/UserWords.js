import React from 'react'
import Word from '../Word/Word'
import './UserWords.css'
function UserWords (props){
  if(props.words.length === 0){
    return <h1>Add a word!</h1>
  }
  let wordsDisplay = props.words.map(word =>{
    return <div><Word addWord = {props.addWord} currentWord = {word}/></div>
  })
  return(
    <section class = 'words-container'>
      {wordsDisplay}
    </section>
  )
}
export default UserWords