import React, { Component } from 'react'
import './Word.css'
 function Word (props){
   if(!props.currentWord){
    return <h1>Add a word</h1>
   }
   let audioFile = props.currentWord.hwi.prs[0].sound.audio
   let audioSubDirect = audioFile.charAt(0)
   console.log('word is the word', props.currentWord  )
  return(
    <section class ='word-card'>
    <button onClick = {() =>{
        props.deleteWord(props.currentWord)
    }}>
Delete Card     
 </button>
 <audio controls>
  <source src={`https://media.merriam-webster.com/audio/prons/es/me/mp3/${audioSubDirect}/${audioFile}.mp3`}/>
</audio>
    <p1>Word: {props.currentWord.hwi.hw}</p1>
    <p1>English Transaltion:
    {props.currentWord.shortdef[0]}
    </p1>
  </section>
    ) 
  }

export default Word