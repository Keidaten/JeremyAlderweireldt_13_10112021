export const selectToken = (state) => state.signIn.token;

export const selectRemember = (state) => state.rememberReducer.remember;

export const selectFirstname = (state) => state.userProfile.firstname;

export const selectLastname = (state) => state.userProfile.lastname;
