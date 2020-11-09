import React, { Component } from 'react'
import './Word.css'
 function Word (props){
   if(!props.currentWord){
    return <h1>Add a word</h1>
   }
   let audio;
   if(props.currentWord.hwi.prs){
     let audioFile = props.currentWord.hwi.prs[0].sound.audio
     let audioSubDirect = audioFile.charAt(0)
     audio = 
     <audio controls>
  <source src={`https://media.merriam-webster.com/audio/prons/es/me/mp3/${audioSubDirect}/${audioFile}.mp3`}/>
</audio>
   }
   
   
   console.log('word is the word', props.currentWord  )
  return(
    <section class ='word-card'>
 {audio}
    <p1>Word: {props.currentWord.hwi.hw}</p1>
    <p1>English Transaltion:
    {props.currentWord.shortdef[0]}
    </p1>
    <button onClick = {() =>{
        props.deleteWord(props.currentWord)
    }}>
Delete Card     
 </button>
  </section>
    ) 
  }

export default Word