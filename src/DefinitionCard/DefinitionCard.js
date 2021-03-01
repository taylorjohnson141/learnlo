import React from 'react';
import './DefinitionCard.css'
function DefinitionCard (props){
  return (
    <section className = 'card-direction'>
      
          <h1 className = 'def-word' >
            {props.word.es.hwi.hw}
            </h1> 
            <h1 className = 'def-word' >
            {props.word.en.hwi.hw}
            </h1>
          
      <button className = 'addButton' onClick = {() =>{
        props.addWord(props.word)
      }}>
        Add to your Study list!
      </button> 
  </section>

  )
}
export default DefinitionCard