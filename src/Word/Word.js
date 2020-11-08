import React, { Component } from 'react'
 function Word (props){
   console.log('word is the word', props.currentWord)
   if(!props.currentWord ){
     return <h1>Add a word!</h1>
   }
  return(
    <section>
    {props.currentWord.hwi.hw}
    English Transaltion
    {props.currentWord.shortdef[0]}
  </section>
    ) 
  }

export default Word