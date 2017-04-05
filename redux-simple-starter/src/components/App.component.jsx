import React, {Component} from 'react';
import SearchBar from './search-bar/SearchBar.component.jsx';
import YoutubeSearch from 'youtube-api-search';
import {youtubeApiConfig} from './../../config/youtube-api.config';
import './App.component.css';

// YoutubeSearch({key: youtubeApiConfig.api, term: 'tum hi ho'}, (response) => {
// 	console.log(response);
// })

class App extends Component {

	constructor(){
		super();
 	}

	render(){
		return (
			<div className="app-component container">
				
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<h1>SearchBar Component</h1>
					</div>
				</div>

				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
						<h1>Video Component</h1>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
						<h1>Video List</h1>
					</div>
				</div>

			</div>
		)
	}

}

export default App;
