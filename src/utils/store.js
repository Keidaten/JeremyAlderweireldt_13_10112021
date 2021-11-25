//Reduxtoolkit
import { configureStore } from '@reduxjs/toolkit';

//Reducers
import authReducer from '../features/authentification';

export default configureStore({
	reducer: {
		signIn: authReducer,
	},
});
