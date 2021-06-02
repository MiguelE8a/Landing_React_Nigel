import React from 'react'
import './assets/style/Header.scss'
import Ig from '../components/assets/static/Ig.jsx'
import Facebook from '../components/assets/static/Facebook.jsx'
import Twitter from '../components/assets/static/Twitter.jsx'

const Header = () =>(
  <div className="header">
    <a href="https://www.facebook.com/NigelVenero" className="icon" target="_blank">
      <Facebook /> 
    </a>
    <a href="https://twitter.com/deejaynigel" className="icon" target="_blank">
      <Twitter /> 
    </a>
    <a href="https://www.instagram.com/deejaynigel/?hl=es-la" className="icon margin__right" target="_blank" rel="noopener">
      <Ig />
    </a>
  </div>
)

export default Header