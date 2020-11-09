function QuizCard (props){
  console.log('I am here')
  return (
    <section>
    <h1>What is the English translation of {props.currentWord.hwi.hw}</h1>
    <button> Weird</button>
        <button onClick ={() =>{
          props.changeCurrentWord()
        }}>{props.currentWord.shortdef[0]}</button>
        <button>No</button>
        <button>Something</button>
        </section>
  )
 
  
}
export default QuizCard