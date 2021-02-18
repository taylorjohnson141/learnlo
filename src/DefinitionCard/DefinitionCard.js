import React from 'react';
function DefinitionCard (props){
  return (
    <section>
      {props.word}
      <button onClick = {props.addWord}></button>
    </section>

  )
}
export default DefinitionCard