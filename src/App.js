import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages
import HomePage from './pages/HomePage';

import './App.css';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
