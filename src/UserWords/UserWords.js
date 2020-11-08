import React from 'react'
import Word from '../Word/Word'
function UserWords (props){
  if(props.words.length === 0){
    return <h1>Add a word!</h1>
  }
  let wordsDisplay = props.words.map(word =>{
    return <div><Word currentWord = {word}/></div>
  })
  return(
    <section>
      {wordsDisplay}
    </section>
  )
}
export default UserWords