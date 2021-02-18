import React from 'react';
function DefinitionCard (props){
  return (
    <section>
      {props.word.hwi.hw}
      <button onClick = {props.addWord}></button>
    </section>

  )
}
export default DefinitionCard