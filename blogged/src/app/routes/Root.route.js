import React from 'react';
import {Route} from 'react-router-dom';
import App from './../components/App.component.jsx';


const routes = (
	<div className="routes">
		<Route path="/" component={App} />
	</div>
)

export const RootRoute = routes;