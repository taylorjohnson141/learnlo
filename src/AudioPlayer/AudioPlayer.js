import {useState} from 'react'
import Speaker from '../images/speaker.svg'
import './AudioPlayer.css'
function AudioPlayer (props) {
  let [playing, updatePlaying] = useState(false)
  const audioElement = new Audio(props.src);

return (
    <>
    <section className ='svg-container'>

    
  <img  className = 'svg' src = {Speaker} onClick ={ () =>{
    if(!playing){
      audioElement.play();
      updatePlaying(true)
      setTimeout(() =>{
        audioElement.pause()
        updatePlaying(false)
      },1000)
    }
  }}/> 
</section>
  </>
)
}
export default AudioPlayer