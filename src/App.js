import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

//Components
import Header from './components/Header';
import Footer from './components/Footer';

//redux
import { useDispatch, useStore } from 'react-redux';

//features
import { logout } from './features/authentification';

//Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';

function App() {
	const dispatch = useDispatch();
	const store = useStore();

	useEffect(() => {
		window.addEventListener('beforeunload', (e) => {
			const { remember } = store.getState().signIn;
			e.preventDefault();
			if (remember === false) {
				dispatch(logout());
			}
			if (remember === true) {
			}
		});
	});

	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/login" element={<LoginPage />}></Route>
				<Route path="/user" element={<UserPage />}></Route>
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
