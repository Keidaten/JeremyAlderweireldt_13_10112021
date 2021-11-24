import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

//Store
import store from './utils/store';

//Components
import Header from './components/Header';
import Footer from './components/Footer';

//Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="/login" element={<LoginPage />}></Route>
					<Route path="/user" element={<UserPage />}></Route>
				</Routes>
				<Footer />
			</Router>
		</Provider>
	);
}

export default App;
