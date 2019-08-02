import React, { Component } from 'react'

export default class Player extends Component {

    renderVideo = () => {
        let video = this.props.video; 
        if(!video)
            return <p>Loading....</p>
        let videoID = video.id.videoId;
        let videoURL = `https://www.youtube.com/embed/${videoID}`;
        return (
            <div className="video-container">
                <iframe title="Video" src={videoURL} />
                <div className="video-desc-main">
                    <div className="video-desc-main-title">
                        {video.snippet.title}
                        <div className="video-desc-main-channel">
                            <span className="uploaded-by">Uploaded by</span> {video.snippet.channelTitle}
                        </div>
                    </div>                 
                </div><hr/>   
                <div className="video-info">
                    <span><b>Description:</b></span>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderVideo()}
            </div>
        )
    }
}
