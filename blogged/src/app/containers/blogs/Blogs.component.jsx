import React, {Component} from 'react';
import './Blogs.component.css';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {GetBlogsAction} from './../../actions/index';
import {BlogsDatabaseConfig as BDC} from './../../../configs/BlogsDatabase.config.js';
import Blog from './../blog/Blog.component.jsx';

class Blogs extends Component {
	constructor(props) {
		super(props);

		this.getBlogs = this.getBlogs.bind(this);
		this.renderBlogList = this.renderBlogList.bind(this);
	}

	// lifecycle method
	componentWillMount() {
		this.getBlogs();
	}

	getBlogs(){
		setTimeout(()=>{
			let promise = axios.get(`${BDC.rootUrl}/posts${BDC.keyQuery}${BDC.key}`);
			this.props.getBlogs(promise);
		}, 3000);
	}
		  
	renderBlogList() {
		const randomBlogs =[
			{ 
				id: 1,
				title: 'Hi!',
				categories: 'Computer, Friends',
				content: 'Post about Friends'
			},
			{
				id: 2,
				title: 'New Post',
				categories: 'Candy',
				content: 'Post about Candy'
			}
		];
		return randomBlogs.map((blog)=>{
			return (
				<Blog key={blog.id} blog={blog} />
			)
		})
	}

	render() {
		if(!this.props.blogs.fetchComplete){
			return (
				/*
				Title: Loading... With CSS3 Animation
				Author: Xhepi, G
				Availability: https://codepen.io/xhepigerta/pen/PZaGwV
				*/
				<div id="loader-wrapper">
				    <div id="loader"></div>
				</div>
			)
		}
		console.log(this.props.blogs);
		return (
			<div className="blogs-component col s12 m12 l12">
				<h1> Blogs Component </h1>
				{this.renderBlogList()}
			</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return {
		blogs: state.blogs
	}
}

const mapDispatchToProps = (dispatch)=>{
	return bindActionCreators({
		getBlogs: GetBlogsAction
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
