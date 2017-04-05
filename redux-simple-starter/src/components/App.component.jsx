import React, {Component} from 'react';
import SearchBar from './search-bar/SearchBar.component.jsx';
import VideoList from './video-list/VideoList.component.jsx';
import Video from './video/Video.component.jsx';
import YoutubeSearch from 'youtube-api-search';
import {youtubeApiConfig} from './../../config/youtube-api.config';
import './App.component.css';

YoutubeSearch({key: youtubeApiConfig.api, term: 'tum hi ho'}, (response) => {
	console.log(response);
})

class App extends Component {

	constructor(){
		super();
 	}

	render(){
		return (
			<div className="app-component container">
				
				<div className="row">
					<div className="search-bar col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<SearchBar />
					</div>
				</div>

				<div className="row">
					<div className="video col-xs-12 col-sm-12 col-md-8 col-lg-8">
						<Video />
					</div>
					<div className="video-list col-xs-12 col-sm-12 col-md-4 col-lg-4">
						<VideoList />
					</div>
				</div>

			</div>
		)
	}

}

export default App;
