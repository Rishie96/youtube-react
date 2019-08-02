import React, { Component } from 'react'

export default class VideoList extends Component {

    renderVideoList = () => {
        let videos = this.props.videos;
        if(videos.length === 0)
            return (
                <p>Please wait....</p>
            )
        return videos.map((video) => {
            return (
                <div key={video.id.videoId} className="video-box" onClick={() => this.props.onClick(video)}>
                   <div className="video-thumbnail">   
                        <img src={video.snippet.thumbnails.medium.url} alt="x" />
                   </div>
                   <div className="video-desc">
                        <span className="video-title">{video.snippet.title}</span><br/><br/>
                        <span className="video-channel-outer">by <span className="video-channel-inner">{video.snippet.channelTitle}</span></span>
                   </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="video-list">
                {this.renderVideoList()}
            </div>
        )
    }
}
