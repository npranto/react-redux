import React, {Component} from 'react';
import './VideoListItem.component.css';

class VideoListItem extends Component{
	constructor(){

	}

	render(){
		return (

			<div className="media">
			  <div className="media-left">
			    <a href="#">
			      <img className="media-object" src="https://lh6.ggpht.com/UHb51xJJRdDjAmGLSXwF-2HRnOQ-YSx5ogF6QjMOB7Cr0x_PRLy6YUYyOeuGEgADKRHe=w300" alt="..." />
			    </a>
			  </div>
			  <div className="media-body">
			    <h4 className="media-heading"> Orlando Magic vs Cleveland Cavaliers - Full Game Highlights | April 4, 2017 | 2016-17 NBA Season </h4>
			    <p className="media-author"> Ximo Pierto Official </p>
			  </div>
			</div>

		)
	}
}

export default VideoListItem