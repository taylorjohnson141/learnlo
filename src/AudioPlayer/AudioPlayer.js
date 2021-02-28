import {useState} from 'react'

function AudioPlayer (props) {
  let [playing, updatePlaying] = useState(false)
  const audioElement = new Audio(props.src);

return (
    <>
  <button onClick ={ () =>{
    if(!playing){
      audioElement.play();
      updatePlaying(true)
      setTimeout(() =>{
        audioElement.pause()
        updatePlaying(false)
      },1000)
    }
  }}>
    Push to Play
  </button>
  </>
)
}
export default AudioPlayer