import useState from 'react'

function AudioPlayer (props) {
  let [playing, updatePlaying] = useState(false)
  const audioElement = new Audio(props.src);

return (
    <>
 
  <button onClick ={ () =>{
    if(!playing){
      audioElement.play();
      updatePlaying(true)
    }
    else{
      audioElement.pause()
      updatePlaying(true)

    }
  }}>
  </button>
  </>
)
}
export default AudioPlayer