import React from 'react';
import './Word.css';
import PropTypes from 'prop-types';
import {useRef} from 'react'

function Word(props) {
  let audioRef = useRef()

  if (!props.currentWord) {
    return <h1 role = 'no-word-error'className="center">Add a word!</h1>;
  }
  let esAudio;
  let enAudio;

  if (props.currentWord.es.hwi.prs) {
  
    if(props.currentWord.es.hwi.prs[0].sound === undefined){
      esAudio = ''
    }else{
      const esAudioFile = props.currentWord.es.hwi.prs[0].sound.audio;
    const esAudioSubDirect = esAudioFile.charAt(0);
    esAudio = (
      <audio className='audio' ref = {`audio${props.currentWord.es.hwi.hw}`} controls >
        < source role = 'audio' src={`https://media.merriam-webster.com/audio/prons/es/me/mp3/${esAudioSubDirect}/${esAudioFile}.mp3`} />
      </audio>
    );
    }
  }
   console.log(props.currentWord.en.hwi.prs[0])
    if (props.currentWord.en.hwi.prs) {
    
      if(props.currentWord.en.hwi.prs[0].sound === undefined){
        enAudio = ''
      }else{
        const enAudioFile = props.currentWord.en.hwi.prs[0].sound.audio;
      const enAudioSubDirect = enAudioFile.charAt(0);
      enAudio = (
        <audio className='audio' ref = {`audio${props.currentWord.en.hwi.hw}`} controls >
          < source role = 'audio' src={`https://media.merriam-webster.com/audio/prons/en/us/mp3/${enAudioSubDirect}/${enAudioFile}.mp3`} />
        </audio>
      );
    }
    
  }
  return (
    <section role = 'word' className="word-card">
     
        <p className = 'span-word'>
          {props.currentWord.es.hwi.hw}
          {esAudio}
          </p>

          <p className = 'definition'>
            Definition: {props.currentWord.en.hwi.hw}
            {enAudio}
          </p>
        
            
            {/* {props.currentWord.en.def[0].sseq[0][0][1].dt[1][1][0]
            &&
            <p className = 'definition'>
            Example Sentance: {props.currentWord.en.def[0].sseq[0][0][1].dt[1][1][0].t}
            {props.currentWord.en.def[0].sseq[0][0][1].dt[1][1][0].tr}
           </p> */}
            } 
            
            
          

      <button
        role = "delete-button"
        type="button"
        className="delete-button"
        onClick={() => {
          props.deleteWord(props.currentWord);
        }}>
        Remove
      </button>
    </section>
  );
}

export default Word;

Word.propTypes = {
  deleteWord :PropTypes.func
}
