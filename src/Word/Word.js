import React, { Component } from 'react'
import './Word.css'
 function Word (props){
   if(!props.currentWord){
    return <h1>Add a word</h1>
   }
   console.log('word is the word', props)
  return(
    <section class ='word-card'>
    <button onClick = {() =>{
        props.deleteWord(props.currentWord)
    }}>
Delete Card     
 </button>
    <p1>Word: {props.currentWord.hwi.hw}</p1>
    <p1>English Transaltion:
    {props.currentWord.shortdef[0]}
    </p1>
  </section>
    ) 
  }

export default Word