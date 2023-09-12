import React, { useState } from 'react';

import './App.css';
import Navbar from './Components/Navbar';
import SideBar from './Components/SideBar';

function App() {
	const [removeClass, setRemoveClass] = useState(false);

	return (
		<div>
			<Navbar setRemoveClass={setRemoveClass} />
			<SideBar removeClass={removeClass} />
			<div className='mt-18'>
				<h1 className='z-40'>Navbar</h1>
			</div>
		</div>
	);
}

export default App;
