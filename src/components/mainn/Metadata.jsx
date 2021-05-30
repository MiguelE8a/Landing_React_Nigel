import React from 'react'
import './style/Metadata.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import image from '../assets/static/paradise_portada.jpg'


const Metadata = () =>{

  return(
    <div className="metadataContainer">
      <img src={image}  className="metadata__img" alt="Album Picture "/>
      <div className="audio-streaming-container">
        <div className="stream--dark">
          <div className="stream__controls--container">
          
            <div className="current-track"></div>
            <div className="stream__control-bg">
              <a href="/#" className="stream__controls">
                <FontAwesomeIcon icon={faPlay} />
                
              </a>

            </div>
          </div>
          <div className="track_List">
            <div className="track__Name">Paradise</div>
            <div className="track__Time right-5rem">0:00</div>
          </div>
          <div className="tracklist__footer">Audio samples provided courtesy of iTunes</div>   
        </div>
       
        
      </div>
    </div>
  )
}

export default Metadata