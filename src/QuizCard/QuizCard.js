function QuizCard (props){
  console.log('I am here')
  return (
    <section>
    <h1>What is the English translation of {props.currentWord.hwi.hw}</h1>
     <button onClick ={() =>{
          props.changeCurrentWord(false)
        }}> Weird</button>
        <button onClick ={() =>{
          props.changeCurrentWord(true)
        }}>{props.currentWord.shortdef[0]}</button>
        <button onClick ={() =>{
          props.changeCurrentWord(false)
        }}>No</button>
        <button onClick ={() =>{
          props.changeCurrentWord(false)
        }}>Something</button>
        </section>
  )
 
  
}
export default QuizCard