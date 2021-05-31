import React from 'react'
import './style/Retailer.scss'
import Retailerli from './Retailer_li.jsx'
import logoSpotify from './static/spotifylogo.png'
import Deezerlogo from './static/deezerlogo.png'
import ApleMusiclogo from './static/applemusiclogo.png'
import YoutubeLogo from './static/youtubelogo.png'
import SoundCloudLogo from './static/soundcloud.png'
import OficialStore from './static/oficialStoreLogo.png'


const Retailer = () =>(
  <div className="provider-list">
    <ul className="retailer-ul">
      <Retailerli 
      title="Listen"
      image={logoSpotify}
      />
      <Retailerli 
      title="Listen"
      image={ApleMusiclogo}
      />
      <Retailerli 
      title="Listen"
      image={Deezerlogo}
      />
      <Retailerli 
      title="Listen"
      image={YoutubeLogo}
      />
      <Retailerli 
      title="Listen"
      image={SoundCloudLogo}
      />
      <Retailerli 
      title="Free Download"
      image={OficialStore}
      />
     
    </ul>
  </div>
)

export default Retailer