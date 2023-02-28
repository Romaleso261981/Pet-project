import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { authReducer } from "./auth/slice";
import themeReducer from "./theme/themeSlice";
import balanceReducer from "./balance/balanceSlice";
import languageReducer from "./lang/langSlice";
import reportsReducer from "./reports/reportsSlice";
import storage from "redux-persist/lib/storage";
import reportsReducer from '../redux/reports/reportsSlice';

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["accessToken", "refreshToken", "sid", "user"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    balance: balanceReducer,
    language: languageReducer,
    theme: themeReducer,
    reports: reportsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
