import React from 'react';
import '../Word/Word.css';
import './DefinitionCard.css'
function DefinitionCard (props){
  return (
    <section className = 'word-card card-direction'>
      
          <section className = "span-word">
            {props.word.es.hwi.hw}
            </section> 
            <section className = "definition">
            {props.word.en.hwi.hw}
            </section>
          
      <button className = 'addButton' onClick = {() =>{
        props.addWord(props.word)
      }}>
        Add to your Study list!
      </button> 
  </section>

  )
}
export default DefinitionCard