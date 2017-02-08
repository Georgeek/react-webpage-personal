import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';

import App from './App';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import NotFound from './components/NotFound';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="portfolio" component={Portfolio} />
			<Route path="about" component={About} />
			<Route path="*" component={NotFound} />
		</Route>
	</Router>,
document.getElementById('root'));
