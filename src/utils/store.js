//Reduxtoolkit
// import { configureStore, createReducer } from '@reduxjs/toolkit';
import { combineReducers, createStore } from 'redux';

//Reducers
import authReducer from '../features/authentification';
import userProfile from '../features/profile';
// import rememberReducer from '../features/remember';

//persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//toolkit
// export default configureStore({
// 	reducer: {
// 		signIn: authReducer,
// 		userProfile: userProfile,
// 	},
// });

export const rootReducer = combineReducers({
	signIn: authReducer,
	userProfile: userProfile,
	// rememberReducer: rememberReducer,
});

const persistConfig = {
	key: 'authType',
	storage: storage,
	whitelist: ['signIn'], // which reducer want to store
};
const pReducer = persistReducer(persistConfig, rootReducer);

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(pReducer, reduxDevtools);

const persistor = persistStore(store);

export { persistor, store };
