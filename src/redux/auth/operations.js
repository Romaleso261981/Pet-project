import { createAsyncThunk } from "@reduxjs/toolkit";
import Notiflix from "notiflix";
import { notifySettings } from "../../utils/notifySettings";

import { API, authToken } from "../../API";
import { toast } from "react-toastify";

const Register = createAsyncThunk("auth/register", async (credentials) => {
  console.log("createAsyncThunk", credentials);
  try {
    const { data } = await API.post("/auth/users/signup", credentials);
    console.log(data);
    return data;
  } catch (error) {
    console.log("error");
    toast.error("Server error, please try again later");
  }
});

const logIn = createAsyncThunk("auth/login", async (userData, thunkAPI) => {
  try {
    const { data } = await API.post("/auth/users/login", userData);
    console.log(userData);
    console.log(data);
    authToken.set(data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);
    const state = thunkAPI.getState();
    const { lang } = state.language.lang;
    lang === "en"
      ? Notiflix.Notify.success(
          `Welcome back, ${data.payload.user.email}!`,
          notifySettings
        )
      : Notiflix.Notify.success(
          `Радо вітаємо, ${data.payload.user.email}!`,
          notifySettings
        );
    return data;
  } catch (error) {
    const state = thunkAPI.getState();
    const { lang } = state.language.lang;
    lang === "en"
      ? Notiflix.Notify.failure(`${error.message}`, notifySettings)
      : Notiflix.Notify.failure(`Щось пішло не так...`, notifySettings);
    return thunkAPI.rejectWithValue(error.request.status);
  }
});

const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await API.post(`/auth/logout`);
    const state = thunkAPI.getState();
    const { lang } = state.language.lang;
    lang === "en"
      ? Notiflix.Notify.info(
          "Stay safe and see you again &#9996;",
          notifySettings
        )
      : Notiflix.Notify.info(
          "Бережіть себе і до зустрічі &#9996;",
          notifySettings
        );
    authToken.unset();
  } catch (error) {
    const state = thunkAPI.getState();
    const { lang } = state.language.lang;
    lang === "en"
      ? Notiflix.Notify.failure(`${error.message}`, notifySettings)
      : Notiflix.Notify.failure(`Щось пішло не так...`, notifySettings);
    return thunkAPI.rejectWithValue(error);
  }
});

const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const prevSid = state.auth.sid;
    const prevRefresh = state.auth.refreshToken;
    if (!prevRefresh || !prevSid) {
      return rejectWithValue("something went wrong");
    }
    try {
      const { data } = await API.post(
        "/auth/refresh",
        { sid: prevSid },
        {
          headers: {
            Authorization: `Bearer ${prevRefresh}`,
          },
        }
      );

      authToken.set(data.newAccessToken);
      return data;
    } catch (error) {
      authToken.unset();
      if (error.response.status !== 401) {
        toast.error("We got an error! Dont worry and try again.");
      }
      return rejectWithValue("something went wrong");
    }
  }
);

const googleAuth = createAsyncThunk(
  "auth/googleAuth",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/auth/google", credentials);
      authToken.set(data.accessToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export { Register, logIn, logOut, refreshUser, googleAuth };
