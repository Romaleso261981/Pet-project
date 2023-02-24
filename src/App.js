import { useEffect, lazy, useState, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { Loader } from "./components/Loader/Loader";

import { theme, darkTheme } from "./utils/theme";
import { ThemeProvider } from "styled-components";
import { getMode } from "./redux/theme/themeSelector";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const token = false;

const LoginPage = lazy(() => import("./pages/Logins/Logins"));
const Register = lazy(() => import("./pages/Register/Register"));
const Layout = lazy(() => import("./components/Layout/Layout"));
const Wallet = lazy(() => import("./pages/Wallet/Wallet"));
const Statistics = lazy(() => import("./pages/Statistics/Statistics"));
const ReportsPage = lazy(() => import("./pages/ReportsPage/ReportsPage"));

const PrivateRoute = ({ children, token }) => {
  return !token ? children : <>Поміняйте token в APP на false</>;
};

const PublicRoute = ({ children, token }) => {
  return !token ? children : <>Поміняйте token в APP на true</>;
};

export function App() {
  const selectedMode = useSelector(getMode);
  const themeMode = selectedMode.mode === "light" ? darkTheme : theme;
  console.log(selectedMode);
  const isLoggedIn = true;

  return (
    <ThemeProvider theme={themeMode}>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Layout />
            </Suspense>
          }
     
        />
        <Route
          path="reports"
          element={
            <PublicRoute restricted>
              <ReportsPage />
            </PublicRoute>
          }
        />
        <Route
          path="/wallet"
          element={
            <Suspense fallback={<Loader />}>
=======
        >
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <PublicRoute token={token}>
                  <LoginPage />
                </PublicRoute>
              </Suspense>
            }
          />
          <Route
            path="/register"
            element={
              <Suspense fallback={<Loader />}>
                <PrivateRoute token={token}>
                  <Register />
                </PrivateRoute>
              </Suspense>
            }
          />
          <Route
            path="/wallet"
            element={
              <Suspense fallback={<Loader />}>
                <PrivateRoute token={token}>
                  <Wallet />
                </PrivateRoute>
              </Suspense>
            }
          />
          <Route
            path="/statistics"
            element={
              <PrivateRoute token={token}>
                <Statistics />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<h1>Невірно прописаний шлях</h1>} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
export default App;
