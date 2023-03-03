import { createAsyncThunk } from "@reduxjs/toolkit";
import Notiflix from "notiflix";
import { toast } from "react-toastify";
import { notifySettings } from "../../utils/notifySettings";
import axios from "axios";

const Register = createAsyncThunk("auth/register", async (credentials) => {
  try {
    console.log(credentials);
    const data = await axios.post('http://localhost:8081/user/add', credentials);
    console.log(data);
    return data;
  } catch (error) {
    console.log("catch");
    toast.error("Server error, please try again later");
  }
});

const logIn = createAsyncThunk("auth/login", async (userData, thunkAPI) => {
  try {
    console.log("logIn");
  } catch (error) {
    const state = thunkAPI.getState();
    const { lang } = state.language.lang;
    lang === "en"
      ? Notiflix.Notify.failure(`${error.message}`, notifySettings)
      : Notiflix.Notify.failure("Щось пішло не так...", notifySettings);
    return thunkAPI.rejectWithValue(error.request.status);
  }
});

const logOut = createAsyncThunk("/auth/logout", async (_, thunkAPI) => {
  try {
    console.log("logOut");
    // const state = thunkAPI.getState();
    // await API.get("/auth/users/logout");
    // localStorage.setItem("refreshToken", "");
    // localStorage.setItem("accessToken", "");
    // const { lang } = state.language.lang;
    // lang === "en"
    //   ? Notiflix.Notify.info(
    //       "Stay safe and see you again &#9996;",
    //       notifySettings
    //     )
    //   : Notiflix.Notify.info(
    //       "Бережіть себе і до зустрічі &#9996;",
    //       notifySettings
    //     );
  } catch (error) {
    const state = thunkAPI.getState();
    const { lang } = state.language.lang;
    lang === "en"
      ? Notiflix.Notify.failure(`${error.message}`, notifySettings)
      : Notiflix.Notify.failure("Щось пішло не так...", notifySettings);
    return thunkAPI.rejectWithValue(error);
  }
});

const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, { getState, rejectWithValue }) => {
    try {
      // console.log("refreshUser");
      // const accessToken = localStorage.getItem("refreshToken");
      // authToken.set(accessToken);
      // return accessToken;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      const state = getState();
      const { lang } = state.language.lang;
      lang === "en"
        ? Notiflix.Notify.failure("Please login again!", notifySettings)
        : Notiflix.Notify.failure(
            "Будь ласка, залогіньтесь знову!",
            notifySettings
          );
      return rejectWithValue(error);
    }
  }
);

const googleAuth = createAsyncThunk(
  "auth/googleAuth",
  async (credentials, { rejectWithValue }) => {
    try {
      // const { data } = await API.post("/auth/google", credentials);
      // authToken.set(data.accessToken);
      // return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export { Register, logIn, logOut, refreshUser, googleAuth };
