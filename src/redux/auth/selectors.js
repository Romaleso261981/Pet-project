export const selectIsLoggedIn = (state) => state.auth.isLogin;
export const selectIsRegister = (state) => state.auth.isRegister;

export const getToken = (state) => state.auth.refreshToken;
