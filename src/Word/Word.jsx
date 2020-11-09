import React from 'react';
import './Word.css';

function Word(props) {
  if (!props.currentWord) {
    return <h1 className="center">Add a word!</h1>;
  }
  let audio;
  if (props.currentWord.hwi.prs) {
    const audioFile = props.currentWord.hwi.prs[0].sound.audio;
    const audioSubDirect = audioFile.charAt(0);
    audio = (
      <audio className='audio' controls >
        <source src={`https://media.merriam-webster.com/audio/prons/es/me/mp3/${audioSubDirect}/${audioFile}.mp3`} />
      </audio>
    );
  }
  return (
    <section className="word-card">
      <p1 className="span-word">
        {props.currentWord.hwi.hw}
        {audio}
      </p1>
      <p1 className="definition">
        Definition:{props.currentWord.shortdef[0]}
      </p1>
      <button
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
