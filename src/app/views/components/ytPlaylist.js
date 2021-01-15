import React, { Component } from 'react'
import hay from '../../../assets/DR_Prop_HayBaleRectangle_0001_50.png'
import BBB from '../../../assets/DR_Baby_Brontosaurus_0001_30.png'
class YTPlaylist extends Component {

  render(){
    return(
      <main className="yt_playlist">
        {/* <div className="top-border"></div> */}
        <aside className="yt-aside-group">
          <img src={BBB} className="bbb" alt="" />
          <img src={hay} className="hay" alt=""/>
        </aside>
        <aside className="yt-content">
          <div className="headline">
            <div className="h2-shadow">Let's Saddle Up!</div>
            <h2>Let's Saddle Up!</h2>
          </div>
          <div className="yt-container">
            <iframe className="playlist-frame" width="854" height="480" src="https://www.youtube.com/embed/videoseries?list=PLdQUqj7ydPYFXGR8HCxrQBMaQw1qrgTJU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </aside>
      </main>
    )
  }
}
export default YTPlaylist