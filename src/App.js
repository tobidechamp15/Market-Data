import React, { useState } from 'react';

import './App.css';
import Navbar from './Components/Navbar';
import SideBar from './Components/SideBar';
import Home from './Components/Home';

function App() {
	const [removeClass, setRemoveClass] = useState(false);

	return (
		<div>
			<Navbar setRemoveClass={setRemoveClass} />
			<SideBar removeClass={removeClass} />
			<Home/>
		</div>
	);
}

export default App;
