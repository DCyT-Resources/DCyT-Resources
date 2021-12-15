import React from 'react';
import Navbar from '../components/navbar';
import Home from './index';
import '../styles/main.css'

const App = () => {
	return(
		<div>
			<Navbar />
			<div className="home-container">
				<Home />
			</div>
		</div>
	)
}

export default App;

