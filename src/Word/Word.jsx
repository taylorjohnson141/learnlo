import React from 'react';
import './Word.css';

function Word(props) {
  if (!props.currentWord) {
    return <h1 role = 'no-word-error'className="center">Add a word!</h1>;
  }
  let audio;
  if (props.currentWord.hwi.prs) {
    const audioFile = props.currentWord.hwi.prs[0].sound.audio;
    const audioSubDirect = audioFile.charAt(0);
    audio = (
      <audio className='audio' controls >
        < source role = 'audio' src={`https://media.merriam-webster.com/audio/prons/es/me/mp3/${audioSubDirect}/${audioFile}.mp3`} />
      </audio>
    );
  }
  return (
    <section role = 'word'className="word-card">
      <p className="span-word">
        {props.currentWord.hwi.hw}
        {audio}
      </p>
      <p className="definition">
        Definition:{props.currentWord.shortdef[0]}
      </p>
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
