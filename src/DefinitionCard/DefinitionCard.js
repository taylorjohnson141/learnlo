import React from 'react';
import './DefinitionCard.css'
import AudioPlayer from '../AudioPlayer/AudioPlayer'
function DefinitionCard (props){
  let esAudio;
  let enAudio;

  if (props.word.es.hwi.prs) {
  
    if(props.word.es.hwi.prs[0].sound === undefined){
      esAudio = ''
    }else{
      const esAudioFile = props.word.es.hwi.prs[0].sound.audio;
    const esAudioSubDirect = esAudioFile.charAt(0);
    esAudio = (
      <AudioPlayer src={`https://media.merriam-webster.com/audio/prons/es/me/mp3/${esAudioSubDirect}/${esAudioFile}.mp3`} ></AudioPlayer>
    );
    }
  }
    if (props.word.en.hwi.prs) {
    
      if(props.word.en.hwi.prs[0].sound === undefined){
        enAudio = ''
      }else{
      const enAudioFile = props.word.en.hwi.prs[0].sound.audio;
      const enAudioSubDirect = enAudioFile.charAt(0);
      enAudio = (
        <AudioPlayer src={`https://media.merriam-webster.com/audio/prons/en/us/mp3/${enAudioSubDirect}/${enAudioFile}.mp3`}> </AudioPlayer>
        
      );
      }
    }
  return (
    <section className = 'card-direction'>
      
          <h1 className = 'def-word' >
            {props.word.es.hwi.hw}
            {esAudio}
            </h1> 
            <button className = 'addButton' onClick = {() =>{
        props.addWord(props.word)
      }}>
        Add to your Study list!
      </button> 
            <h1 className = 'def-word' >
            {props.word.en.hwi.hw}
            {enAudio}
            </h1>

        
          
     
  </section>

  )
}
export default DefinitionCard