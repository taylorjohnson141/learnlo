import {useState,useEffect} from 'react'
import Speaker from '../images/speaker.svg'
import './AudioPlayer.css'
function AudioPlayer (props) {
  const audioElement = new Audio(props.src);
  
return (
    <>
    <section className ='svg-container'>
    <img  tabIndex ={0} className = 'svg' src = {Speaker} onClick ={ () =>{
     audioElement.play();
  }}/> 
</section>
  </>
)
}
export default AudioPlayer