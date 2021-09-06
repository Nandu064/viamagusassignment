import React from 'react';
import ReactPlayer from 'react-player';
import './Video.css'

function Video() {
    return (
        <div className="outer_wrapper">
            <div className="circle"></div>
            <div className="thumbNail">
                <img src="http://img.youtube.com/vi/ysz5S6PUM-U/0.jpg" style={{width:'100px',height:'100px'}}/>
            </div>
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>
        </div>
    )
}

export default Video
