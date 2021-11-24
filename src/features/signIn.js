//Reduxtoolkit
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
	email: '',
	password: '',
	token: '',
};

const IDENTIFIERS = 'identifiers';
const TOKEN = 'token';

//Actions

export const identifiers = (e, type) => ({
	type: IDENTIFIERS,
	input: type,
	payload: e.target.value,
});

export const logUser = (token) => ({ type: TOKEN, payload: token });

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
		});
});

// export default reducer;
