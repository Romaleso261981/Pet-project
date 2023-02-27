export const selectIsLoading = (state) => state.auth.isLoading;
export const selectIsError = (state) => state.auth.error;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const getRefreshToken = (state) => state.auth.refreshToken;
export const getSid = (state) => state.auth.sid;
export const getAccessToken = (state) => state.auth.accessToken;
export const getEmail = (state) => state.auth.user.email;
export const getToken = (state) => state.auth.user.token;
