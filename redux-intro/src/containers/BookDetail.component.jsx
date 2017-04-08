import React, {Component} from 'react';
import {connect} from 'react-redux'; 

import './../assets/style/BookDetail.component.css';

class BookDetail extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		if(!this.props.activeBook){
			return (
				<div className="initial-detail-load">
					<h4 className="text-center"><span className="label label-info"> Select a book on the left </span></h4>
					<div className="embed-responsive embed-responsive-16by9">
					  <iframe 
					  	className="embed-responsive-item" 
					  	width="100%" 
					  	src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif"
					  	frameBorder="0" 
					  	allowFullScreen>
					  </iframe>
					</div>
				</div>
			)
		}

		return (
			<div className="book-detail-component">
				<div className="page-header">
				  <h1> {this.props.activeBook.title} <small> {this.props.activeBook.author} </small></h1>
				</div>

			    <p> <strong> Description </strong> </p>
			    <p className="faded"> {this.props.activeBook.description} </p>

				<hr />
				<h1> Price <span className="label label-danger"> {this.props.activeBook.price} </span></h1>
			</div>
		)
	}

}

const mapStateToProps = (state)=>{
	return {
		activeBook: state.activeBook
	}
}

export default connect(mapStateToProps)(BookDetail);

