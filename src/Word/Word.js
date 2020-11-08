import React, { Component } from 'react'
 function Word (props){
   console.log('word is the word', props)
   
  return(
    <button onClick = {() =>{
      if(!props.addWord){
        
      }else{
        props.addWord(props.currentWord)
      }
    }}>
    {props.currentWord.hwi.hw}
    English Transaltion
    {props.currentWord.shortdef[0]}
  </button>
    ) 
  }

export default Word