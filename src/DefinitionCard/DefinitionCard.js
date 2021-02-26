import React from 'react';
import '../Word/Word.css';
import './DefinitionCard.css'
function DefinitionCard (props){
  return (
    <section className = 'word-card card-direction'>
         {props.word.meta.lang === 'es' && 
          <> 
          <section className = "span-word">
            {props.word.hwi.hw}
            </section> 
            <section className = "definition">
            {props.word.shortdef[0]}
            </section>
          </>
        }
        {props.word.meta.lang === 'en' && 
        <>
          <section className = "span-word">
         {props.word.shortdef[0]}
            </section>
            <section className = "definition">
          {props.word.hwi.hw}
            </section>
        </>
      }
      <button className = 'addButton' onClick = {() =>{
        props.addWord(props.word)
      }}>
        Add to your Study list!
      </button> 
  </section>

  )
}
export default DefinitionCard