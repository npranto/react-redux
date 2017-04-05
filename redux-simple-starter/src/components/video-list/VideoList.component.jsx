import React, {Component} from 'react';
import VideoListItem from './../video-list-item/VideoListItem.component.jsx';
import './VideoList.component.css';

class VideoList extends Component{
	constructor(props){
		super(props);
		console.log(this.props.videos)
	}

	render(){ 


		return (

			<ul className="media-list">
				{this.props.videos.length}

				<VideoListItem />

			</ul>

		)
	}
}

export default VideoList
