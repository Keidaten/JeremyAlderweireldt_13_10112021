import { useState } from 'react';
import { Navigate } from 'react-router-dom';

//redux
import { useDispatch, useSelector, useStore } from 'react-redux';

//features
import { identifiers, logUser, rememberUser } from '../../features/authentification';

//selectors
import { selectToken } from '../../utils/selectors';

//utils
import { postLogin } from '../../utils/serviceAPI';

function Form() {
	const dispatch = useDispatch();
	const store = useStore();
	const token = useSelector(selectToken);
	const [errorFeedback, setErrorFeedback] = useState('');

	const login = (e) => {
		e.preventDefault();

		const user = store.getState().signIn;

		postLogin(user)
			.then((response) => {
				if (response.data.body.token) {
					dispatch(logUser(response.data.body.token));
				}
			})
			.catch((response) => {
				setErrorFeedback(response.response.data.message);
			});
	};

	return (
		<>
			{token !== '' && token !== undefined && <Navigate to="/user" />}
			<form onSubmit={(e) => login(e)}>
				<div className="input-wrapper">
					<label htmlFor="username">Username</label>
					<input type="emal" id="username" onChange={(e) => dispatch(identifiers(e, 'email'))} />
				</div>
				<div className="input-wrapper">
					<label htmlFor="password">Password</label>
					<input type="password" id="password" onChange={(e) => dispatch(identifiers(e, 'password'))} />
				</div>
				<div className="input-remember">
					<input type="checkbox" id="remember-me" onChange={(e) => dispatch(rememberUser(e))} />
					<label htmlFor="remember-me">Remember me</label>
				</div>
				<button className="sign-in-button">Sign In</button>
				{token === '' && <span>{errorFeedback}</span>}
			</form>
		</>
	);
}

export default Form;
