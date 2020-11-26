import React from 'react';
import YouTube from 'react-youtube';
 
const Video = () => {

    const _onReady = (event) => { 
        event.target.pauseVideo();
    }
    const opts = {
      height: '320',
      width: '640',
      playerVars: { 
        autoplay: 1,
      },
    };
 
    return <YouTube videoId="1shK9GFDuO8" opts={opts} onReady={_onReady} />;
}
export default Video;