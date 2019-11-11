import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import List from './components/List';

import Form from './components/Form';

const App = () => (
	<div>
		<Form />
		<List />
	</div>
);


ReactDOM.render(
	<App />,
	document.getElementById('app')
);