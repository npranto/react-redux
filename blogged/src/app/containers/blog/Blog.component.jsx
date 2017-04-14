import React, {Component} from 'react';
import './Blog.component.css';

class Blog extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
          <div className="card blog-component col s12 m12 l12">
            <div className="card-image">
              <span className="card-title">Card Title</span>
            </div>
            <div className="card-content">
              <h1 className="card-title"> <strong> Card Title </strong> </h1>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        )
	}
}

export default Blog;