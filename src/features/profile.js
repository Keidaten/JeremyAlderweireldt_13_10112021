//Reduxtoolkit
import { createReducer } from '@reduxjs/toolkit';

//initialState
const initialState = {
	firstname: '',
	lastname: '',
};

const IDENTIFICATION = 'identification';
const RESET_PROFILE = 'profileReset';

//Actions
export const identification = (data) => ({
	type: IDENTIFICATION,
	firstname: data.firstName,
	lastname: data.lastName,
});

export const resetProfile = () => ({
	type: RESET_PROFILE,
});

// Reducer
export default createReducer(initialState, (builder) => {
	return builder
		.addCase(IDENTIFICATION, (draft, action) => {
			draft.firstname = action.firstname;
			draft.lastname = action.lastname;
			return;
		})
		.addCase(RESET_PROFILE, () => {
			return initialState;
		});
});
