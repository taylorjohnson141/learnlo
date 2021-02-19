import React from 'react';
function DefinitionCard (props){
  return (
    <section>
        {props.word.meta.lang === 'es' && 
        <>
                Spanish 

        <section>
          {props.word.hwi.hw}
          </section>
          English 

          <section>
            {props.word.shortdef[0]}
          </section>
        </>
          }
           {props.word.meta.lang === 'en' && 
        <>
        Spanish
        <section>
        {props.word.shortdef[0]}
          </section>
          English

          <section>
            {props.word.hwi.hw}
          </section>
        </>
}
         
      <button onClick = {() =>{
        props.addWord(props.word)
      }}>
        Add to your Study list!
      </button>
    </section>

  )
}
export default DefinitionCard