import React, {Component} from 'react';
import SearchBar from './search-bar/SearchBar.component.jsx';
import YoutubeSearch from 'youtube-api-search';
import {youtubeApiConfig} from './../../config/youtube-api.config';


YoutubeSearch({key: youtubeApiConfig.api, term: 'tum hi ho'}, (response) => {
	console.log(response);
})

class App extends Component {

	constructor(){
		super();
 	}

	render(){
		return (
			<div className="app-component">
				<h1> Youtube </h1>
				<SearchBar />	
			</div>
		)
	}

}

export default App;
