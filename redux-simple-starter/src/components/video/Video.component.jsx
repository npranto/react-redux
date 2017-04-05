import React, {Component} from 'react';
import moment from 'moment';
import './Video.component.css';

class Video extends Component{
	constructor(){
		super();
	}

	render(){
		return(
			<div>
				<div className="embed-responsive embed-responsive-16by9">
				  <iframe 
				  	className="embed-responsive-item" 
				  	width="100%" 
				  	src="https://www.youtube.com/embed/9B7te184ZpQ" 
				  	frameBorder="0" 
				  	allowFullScreen>
				  </iframe>
				</div>

				<div className="page-header">
					<h2> Tum Hi Ho" Aashiqui 2 Full Song With Lyrics | Aditya Roy Kapur, Shraddha Kapoor <small>  </small></h2>
					<h4 className="media-by"> By <span className="label label-danger"> T-Series </span></h4>	
				</div>

				<h5 className="media-published"> Published on <i>{moment('2013-04-04T12:32:37.000Z').format("dddd, MMMM Do YYYY")}</i> </h5>

				<h5 className="media-desc"> Description </h5>
				<div className="well well-sm">
					Click to share it on Facebook - http://bit.ly/TumHiHoSong Click to Tweet it on Twitter - http://ctt.ec/H51Ue Presenting full song with lyrics "Tum Hi Ho" of "Aashiqui ...
				</div>

			</div>

		)
	}
}

export default Video;