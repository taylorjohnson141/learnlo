import './QuizCard.css'
function QuizCard (props){
  console.log('I am here')
  return (
    <section className = 'quiz-card'>
    <h1 className = 'question'>What is the English translation of {props.currentWord.hwi.hw}?</h1>
    <section className = 'button-section'>
     <button className = 'button'onClick ={() =>{
          props.changeCurrentWord(false)
        }}> Weird</button>
        <button className = 'button' onClick ={() =>{
          props.changeCurrentWord(true)
        }}>{props.currentWord.shortdef[0]}</button>
        <button  className = 'button'onClick ={() =>{
          props.changeCurrentWord(false)
        }}>No</button>
        <button  className = 'button'onClick ={() =>{
          props.changeCurrentWord(false)
        }}>Something</button>
        </section>
        </section>
  )
 
  
}
export default QuizCard