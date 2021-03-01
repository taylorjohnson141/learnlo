import {useState} from 'react'
import Speaker from '../images/speaker.svg'
function AudioPlayer (props) {
  let [playing, updatePlaying] = useState(false)
  const audioElement = new Audio(props.src);

return (
    <>
    <div className = 'svg-container'>
  <img src = {Speaker} onClick ={ () =>{
    if(!playing){
      audioElement.play();
      updatePlaying(true)
      setTimeout(() =>{
        audioElement.pause()
        updatePlaying(false)
      },1000)
    }
  }}/> 
      </div>

  </>
)
}
export default AudioPlayer