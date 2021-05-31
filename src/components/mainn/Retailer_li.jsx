import React from 'react'
import './style/Retailer-li.scss'

const Retailer_li = (props) => (
  <li className="retailer-li">
        <a href="/#" className="retailer-main--item">
          <div className="retailer-container--img">
            <img src={props.image} alt="retail logo" className="retailer-img" />
          </div>

          <div className="retailer-text">
          {props.title}
          </div>
        </a>
      </li>
)

export default Retailer_li