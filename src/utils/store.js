//Reduxtoolkit
import { configureStore } from '@reduxjs/toolkit';

//Reducers
import authReducer from '../features/authentification';
import userProfile from '../features/profile';

export default configureStore({
	reducer: {
		signIn: authReducer,
		userProfile: userProfile,
	},
});
