import React from 'react'
import './style/Metadata.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import imagen from '../assets/static/paradise_portada.jpg'
import Cancion from '../assets/static/Paradise(Preview).mp3'
import { useState, useRef, useEffect } from 'react'

function useInterval(callback, delay){
  const savedCallback = useRef();

  useEffect(()=> {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(()=> {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null){
      let id = setInterval(tick, delay);
      return () =>clearInterval(id)
    }
  }, [delay]);
}

const Metadata = (props) =>{
  const [playing, setPlaying] = useState(0)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef(null)
  const togglePlaying = () => setPlaying(prev => !prev)

  useEffect(()=>{
    if(audioRef && audioRef.current){
      if(playing) audioRef.current.play();
      else audioRef.current.pause();
    }
  },[playing])
  
  useInterval(()=> {
    if(audioRef && audioRef.current){
      const {currentTime, duration} = audioRef.current
      setProgress(Math.ceil((currentTime * 100) / duration))
    }
  })


  return(
    <div className="metadataContainer">
      <img src={imagen}  className="metadata__img" alt="AlbumPicture"/>
      <div className="audio-streaming-container">
        <div className="stream--dark">
          <div className="stream__controls--container">
            <div className="current-track-container">
              <div className="currentTrack01"></div>
              <div className="currentTrack02" style={{width:`${progress}%`,}}></div>
            </div>
            <div className="stream__control-bg">
              <audio src={Cancion} ref={audioRef} type="audio/mpeg" id="audio" className="player-audio"></audio>
              <div onClick={togglePlaying} className="stream__controls">
                {playing ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
              </div>
            </div>
          </div>
          <div className="track_List">
            <div className="track__Name">{props.titleTrack}</div>
            <div className="track__Time right-5rem">{"0:00"}</div>
          </div>
          <div className="tracklist__footer">Audio samples provided courtesy of iTunes</div>   
        </div>
       
        
      </div>
    </div>
  )
}

export default Metadata