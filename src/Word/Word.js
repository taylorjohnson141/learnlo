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
     <audio className = 'audio'controls>
  <source src={`https://media.merriam-webster.com/audio/prons/es/me/mp3/${audioSubDirect}/${audioFile}.mp3`}/>
</audio>
   }
   
   
   console.log('word is the word', props.currentWord)
  return(
    <section className ='word-card'>
    <p1 className = 'span-word'>{props.currentWord.hwi.hw} {audio}</p1>
    <p1 className ='definition' >
    Definition:{props.currentWord.shortdef[0]}
    </p1>
    <button class = 'delete-button' onClick = {() =>{
        props.deleteWord(props.currentWord)
    }}>
Remove   
 </button>
  </section>
    ) 
  }

export default Word