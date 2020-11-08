import React, { Component } from 'react'
import './Word.css'
 function Word (props){
   console.log('word is the word', props)
   
  return(
    <section class ='word-card'>
    <button onClick = {() =>{
      if(!props.addWord){
        
      }else{
        props.addWord(props.currentWord)
      }
    }}>
      Favorite Card
      </button>
    <p1>Word: {props.currentWord.hwi.hw}</p1>
    <p1>English Transaltion:
    {props.currentWord.shortdef[0]}
    </p1>
  </section>
    ) 
  }

export default Word