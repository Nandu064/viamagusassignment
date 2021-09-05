import React from 'react';
import ReactPlayer from 'react-player';
import './Video.css'

function Video() {
    return (
        <div className="outer_wrapper">
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
        </div>
    )
}

export default Video
