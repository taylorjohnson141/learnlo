import React from 'react'
function UserWords (props){
  let wordsDisplay = props.words.map(word =>{
    return <Word currentWord = {word}></Word>
  })
  return(
    <section>
      {wordsDisplay}
    </section>
  )
}
export default UserWords