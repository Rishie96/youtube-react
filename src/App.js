import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import Search from './Search';
import Video from './Video';
import VideoList from './VideoList';
import './App.css';

let API_KEY = 'AIzaSyCL-oxDAj-y0Hu3fPpslewrx44b_gHmNJQ';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: 'PRIPYAT',
      videos: [],
      video: null
    }
    this.initPlayer(this.state.term);
  }

  initPlayer = (term) => {
    YTSearch({key: API_KEY, term}, (videos) => {
      this.setState({videos, video: videos[0]});
    });
  }

  onVideoClickHandler = (video) => {
    this.setState({video});
  } 

  onChangeHandler = (term) => {
    this.initPlayer(term);
  }

  render() {
    return (
      <div className="main-container">    
        <Search onClick={this.onChangeHandler} />
        <Video video={this.state.video} />    
        <VideoList onClick={this.onVideoClickHandler} videos={this.state.videos} />    
      </div>
    )
  }
}

