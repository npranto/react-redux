import React, { Component } from 'react';

import BookList from './../containers/BookList.component.jsx';
import BookDetail from './../containers/BookDetail.component.jsx';
import './../assets/style/App.component.css';

export default class App extends Component {
  render() {
    return (
      <div className="app-component">
      	<div className="page-header">
		  <h1 className="header"><a href="/"> Reeder <small>learn about different books</small></a></h1>
		</div>
      	<div className="col-xs-12 col-sm-12 col-md-4 col-lg-5">
      		<div className="panel panel-success">
			  <div className="panel-heading">
			    <h3 className="panel-title"> Books </h3>
			  </div>
			    <BookList />
			</div>
      	</div>
		<div className="col-xs-12 col-sm-12 col-md-8 col-lg-7">
      		<div className="panel panel-default">
			  <div className="panel-heading">
			    <h3 className="panel-title"> Details </h3>
			  </div>
			  <div className="panel-body">
			    <BookDetail />
			  </div>
			</div>
      	</div>
      </div>
    );
  }
}
