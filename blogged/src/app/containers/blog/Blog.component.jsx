import React, {Component} from 'react';
import './Blog.component.css';

class Blog extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="blog-component col s12 m12 l12">
				<ul className="collection with-header">
			        <li className="collection-header light-blue darken-1 white-text center"><h4> Card Title </h4></li>
			        <li className="collection-item grey lighten-5">
			        	<p className=""> I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
			        	</p>
			        </li>
		        </ul>
	        </div>
        )
	}
}

export default Blog;