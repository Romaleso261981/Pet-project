export const selectIsLoading = (state) => state.auth.isLoading;
export const selectIsError = (state) => state.auth.error;
export const selectRefreshToken = (state) => state.auth.refreshToken;
export const selectAccessToken = (state) => state.auth.accessToken;
export const getSid = (state) => state.auth.sid;
export const getEmail = (state) => state.auth.user.email;
