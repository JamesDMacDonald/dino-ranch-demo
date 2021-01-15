import React, { Component } from 'react'
import Logo from '../../../assets/DR Logo_30.png'
import Jon from '../../../assets/DR_Jon_Blitz_0001_30.png'
import Min from '../../../assets/DR_Min_Clover_0002_30.png'
import Miguel from '../../../assets/DR_Miguel_Tango_0004_30.png'
import DinoEgg from '../../../assets/DR_Prop_DinoEgg_0002_30.png'
import bg from '../../../assets/DR_BG_DinoRanch_Entry Gate_0001_30.jpg';
import plains from '../../../assets/DR_BG_Plains_0001.jpg';

import detectBrowserLanguage from 'detect-browser-language'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      releaseDate: 'January 18 2021 00:00:00',
      remaningTime : {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
      },
      opacity: 100,
      filter: 'none' 
    }
  }
  componentDidMount(){
    this.calcTimeRemaining();
    window.addEventListener('scroll', this.scrollFilter)
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.scrollFilter)
  }

  scrollFilter = () => {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;

  const newFilter = 0 + winScroll / 150;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;
    const newOpacity = 1 + scrolled * 2;
    // this.setState({opacity: newOpacity, filter: `blur(${newFilter}px) brightness(1)`})
    // return newOpacity;
  // return "blur(" + newFilter + "px) brightness(0.7)";
  }

  calcTimeRemaining(){
    // ? get the global time from an api, compare that to the release date, display the countdown and change the image to the one representing how close to the date it is.

    const total = Date.parse(this.state.releaseDate) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60) >= 10 ? Math.floor((total / 1000) % 60) : `0${Math.floor((total / 1000) % 60)}`;
    const minutes = Math.floor((total / 1000 / 60) % 60) >= 10 ? Math.floor((total / 1000 / 60) % 60) : `0${Math.floor((total / 1000 / 60) % 60)}` ;
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24) >= 10? Math.floor((total / (1000 * 60 * 60)) % 24) : `0${Math.floor((total / (1000 * 60 * 60)) % 24)}`;
    const days = Math.floor(total / (1000 * 60 * 60 * 24)) >= 10 ? Math.floor(total / (1000 * 60 * 60 * 24)) : `0${Math.floor(total / (1000 * 60 * 60 * 24))}` ;

    this.setState({
      remaningTime: {
        days,
        hours,
        minutes,
        seconds}})
    // ? set a timer to rerun this function every second to update the time value
    setTimeout(() => {
      this.calcTimeRemaining();
    }, 1000);
  }
  render(){    
    return(
      <header className="dino-header">
        {/* <img className="bg-img" src={bg} alt="" style={{
          // opacity: `${this.state.opacity}`, filter: `${this.state.filter}`, transform: `scale(1, 1.1)`, backgroundSize: `cover`, height: `100%`, width: `100vw`
          }}/> */}
        {Date.parse(this.state.releaseDate) - Date.parse(new Date()) <= 0 ? 
            <img className="bg-img" src={bg} alt="" style={{
              // opacity: `${this.state.opacity}`, filter: `${this.state.filter}`, transform: `scale(1, 1.1)`, backgroundSize: `cover`, height: `100%`, width: `100vw`
            }} />
            : null}
        {Date.parse(this.state.releaseDate) - Date.parse(new Date()) <= 0 ? 
        <div className="group">
            <img src={Logo} className="dino-logo" alt="Logo" style={{ opacity: `${this.state.opacity}`, filter: `${this.state.filter}` }} />
            <img src={Jon} className="Jon" alt="Jon" style={{ opacity: `${this.state.opacity}`, filter: `${this.state.filter}` }} />
            <img src={Min} className="Min" alt="Min" style={{ opacity: `${this.state.opacity}`, filter: `${this.state.filter}` }} />
            <img src={Miguel} className="Miguel" alt="Miguel" style={{ opacity: `${this.state.opacity}`, filter: `${this.state.filter}` }} />
        </div> :
        <div className="egg-header">
            <img className="bg-img" src={bg} alt="" style={{
              // opacity: `${this.state.opacity}`, filter: `${this.state.filter}`, transform: `scale(1, 1.1)`, backgroundSize: `cover`, height: `100%`, width: `100vw`
            }} />
          <div className="countdown-timer">   
            {/* <span className="time-type">Days: </span> */}
              <span className={`time-value days ${this.props.language}`}>{this.state.remaningTime.days}</span>
            {/* <span className="time-type">Hours: </span> */}
              <span className={`time-value hours ${this.props.language}`}>{this.state.remaningTime.hours}</span>
            {/* <span className="time-type">Minutes: </span> */}
              <span className={`time-value minutes ${this.props.language}`}> {this.state.remaningTime.minutes}</span>
            {/* <span className="time-type">Seconds: </span> */}
              <span className={`time-value seconds ${this.props.language}`}> {this.state.remaningTime.seconds}</span>
          </div>

            <img src={DinoEgg} className="egg" alt="DinoEgg" style={{ opacity: `${this.state.opacity}`, filter: `drop-shadow(10px 5px 5px #222) ${this.state.filter}`}}/>
        </div>
        }
      </header>
    )
  }
}
export default Header