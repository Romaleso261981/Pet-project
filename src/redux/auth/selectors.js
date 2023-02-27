export const selectIsLoading = (state) => state.auth.isLoading;
export const selectIsError = (state) => state.auth.error;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const getToken = (state) => state.auth.token;
export const getSid = (state) => state.auth.sid;
export const getEmail = (state) => state.auth.user.email;
