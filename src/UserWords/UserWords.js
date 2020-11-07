import React from 'react'
import Word from '../Word/Word'
function UserWords (props){
  console.log(props)
  let wordsDisplay = props.words.map(word =>{
    return <div><Word currentWord = {word}/></div>
  })
  console.log(wordsDisplay)
  return(
    <section>
      {wordsDisplay}
    </section>
  )
}
export default UserWords