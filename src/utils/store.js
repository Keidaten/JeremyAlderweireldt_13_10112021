//Reduxtoolkit
import { configureStore } from '@reduxjs/toolkit';

//Reducers
import signInReducer from '../features/signIn';

export default configureStore({
	reducer: {
		signIn: signInReducer,
	},
});
