// import logo from './logo.svg';
import React, { Component } from 'react';
import './styles/App.css';
import Header from '../src/app/views/components/header';
import YTPlaylist from '../src/app/views/components/ytPlaylist';
import Terms from '../src/app/views/components/terms';

import detectBrowserLanguage from 'detect-browser-language'
import publicIp from "public-ip";

async function getIP(){
  let ip = await publicIp.v4({
    fallbackUrls: ["https://ifconfig.co/ip"]
  }).then(res => {
    return res
  })  
  let data = await fetch(`https://ipapi.co/${ip}/json/`)
    .then(res => {
      return res.json()
    })    
  return data
}
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      country : '',
      language : ''
    }
  }
  componentDidMount(){
    let ip
    getIP().then(res => {
      console.log(res);
      
      ip = res.country
      console.log(detectBrowserLanguage());
      
      this.setState({country: res.country, language: detectBrowserLanguage().substring(0,2)})
    });
  }
  render(){   
    console.log(this.state);
    
    return (
      <div className="App">
        {/* ? */}
        {(Date.parse('March 20 2021 00:00:00') - Date.parse(new Date()) <= 0) ?
          <div>
            <Header language={this.state.language}/>

            <YTPlaylist country={this.state.country} language={this.state.language} />
            <Terms country={this.state.country} language={this.state.language} />
          </div>
          :
          <div>
            <Header language={this.state.language} />
          </div>
        }

      </div>
    );
  }
}

export default App;
