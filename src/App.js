import React from 'react';
import { Component } from 'react';
import Menu from './components/MenuComponent';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Main />
				</div>
			</BrowserRouter>
		);
	}
}



export default App;