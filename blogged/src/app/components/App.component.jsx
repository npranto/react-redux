import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.component.css';
import NavigationBar from './../components/navigation-bar/NavigationBar.component.jsx';
import SearchBar from './../containers/search-bar/SearchBar.component.jsx';
import Blogs from './../containers/blogs/Blogs.component.jsx';
import Blog from './../containers/blog/Blog.component.jsx';
import Features from './../components/features/Features.component.jsx';
import CreateNewBlog from './../containers/create-new-blog/CreateNewBlog.component.jsx';

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="app-component row">
				<NavigationBar />
				<SearchBar />
				<Switch>
					<Route exact path="/" component={Blogs} />
					<Route path="/blog" component={Blog} />
					<Route path="/features" component={Features} />
					<Route path="/create" component={CreateNewBlog} />
				</Switch>
			</div>
		)
	}
}







