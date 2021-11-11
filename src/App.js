import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import Header from './components/Header';
import Footer from './components/Footer';

//Pages
import HomePage from './pages/HomePage';
import SignInPage from './pages/HomePage/SignInPage';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/sign-in" element={<SignInPage />}></Route>
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
