import React, { Component } from 'react'
 function Word (props){
   console.log('word is the word', props.currentWord)
   
  return(
    <section onClick = {props.addWord}>
    {props.currentWord.hwi.hw}
    English Transaltion
    {props.currentWord.shortdef[0]}
  </section>
    ) 
  }

export default Word