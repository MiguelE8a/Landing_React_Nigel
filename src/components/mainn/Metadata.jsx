import React from 'react'
import './style/Metadata.css'
import imagge from '../assets/static/paradise_portada.jpg'


const Metadata = () =>{

  return(
    <div className="metadataContainer">
      <img src={imagge}  className="metadata__img" alt="Album Picture "/>
      <div className="audio-streaming-container">
        <div className="stream--dark">
          <div className="stream__controls-container">
            <div className="stream__controls"></div>
            <div className="current-track"></div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Metadata