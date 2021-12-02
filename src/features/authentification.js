//Reduxtoolkit
import { createReducer } from '@reduxjs/toolkit';

//initialState
const initialState = {
	email: '',
	password: '',
	token: '',
	remember: false,
};

const IDENTIFIERS = 'identifiers';
const TOKEN = 'token';
const REMEMBER = 'remember';
const LOGOUT = 'logout';

//Actions
export const identifiers = (e, type) => ({
	type: IDENTIFIERS,
	input: type,
	payload: e.target.value,
});

export const logUser = (token) => ({ type: TOKEN, payload: token });

export const rememberUser = (e) => ({ type: REMEMBER, payload: e.target.checked });

export const logout = () => ({ type: LOGOUT });

// Reducer
export default createReducer(initialState, (builder) => {
	return builder
		.addCase(IDENTIFIERS, (draft, action) => {
			if (action.input === 'email') {
				draft.email = action.payload;
				return;
			}
			if (action.input === 'password') {
				draft.password = action.payload;
				return;
			}
		})
		.addCase(TOKEN, (draft, action) => {
			draft.token = action.payload;
			return;
		})
		.addCase(REMEMBER, (draft, action) => {
			draft.remember = action.payload;
			return;
		})
		.addCase(LOGOUT, () => {
			return initialState;
		});
});
