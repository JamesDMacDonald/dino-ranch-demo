import React, { Component } from 'react'
import twitter from '../../../assets/twitter-xxl.png'
import facebook from '../../../assets/facebook-3-xxl.png'
import instagram from '../../../assets/instagram-xxl.png'
import pintrest from '../../../assets/pinterest-5-xxl.png'
import CBCKids from '../../../assets/CBCKids.gif'
import DisneyJunior from '../../../assets/PngItem_835216.png'
import terms from '../../../assets/Dino Ranch - Website terms and conditions of use(213862.1).doc'
import privacy from '../../../assets/Dino Rancher - Website Acceptable use policy(213863.1).doc'
import acceptable from '../../../assets/Dino Rancher - Website Acceptable use policy(213863.1).doc'

class Terms extends Component{

  displayLogos(){

    switch(this.props.country){
      case 'CA':
        return <div className="broadcasters">
          <a href="https://www.cbc.ca/kids/" target="_blank">
          <img src={CBCKids} alt="CBC Kids logo"/>
        </a>
          <a href="https://www.disneyjunior.ca/" target="_blank">
          <img src={DisneyJunior} alt="Disney Junior Logo"/>
        </a>
        </div>
      case 'US':
        return <div className="broadcasters">
          <img src={DisneyJunior} alt="DIsney Junior Logo"/>
        </div>
      default:
        return  <div className="broadcasters">
          <img src={DisneyJunior} alt="DIsney Junior Logo"/>
        </div>
    }
  }
  render(){
    return(
      <footer className="footer">
        <div className="h2-shadow">Where To Watch</div>
        <h2>Where To Watch</h2>
        {this.displayLogos()}

        <div className="social">
          <a href="https://www.facebook.com/DinoRanch/">
            <img src={facebook} alt="" />
          </a>
          <a href="https://twitter.com/dino_ranch/">
            <img src={twitter} alt="" />
          </a>
          <a href="https://www.instagram.com/dino_ranch/">
            <img src={instagram} alt=""/>
          </a>
          <a href="https://www.pinterest.com/Dino_Ranch/">
            <img src={pintrest} alt="" />
          </a>
        </div>
        <div className="terms">
          <a href={terms}>Terms and Conditions</a> |
          <a href={privacy}>Privacy Policy</a> |
          <a href={acceptable}>Acceptable Use Policy</a>
        </div>
        <div className="copyright">
          <span>Dino Ranch © 2020 Boat Rocker Rights Inc. TM & © 2020 Boat Rocker Rights Inc.  www.boatrocker.com. All rights reserved.</span>
        </div>
      </footer>
    )
  }
}
export default Terms