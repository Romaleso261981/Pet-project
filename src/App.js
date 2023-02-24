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

const LoginPage = lazy(() => import("./pages/LoginsPage/Logins"));
const Register = lazy(() => import("./pages/RegisterPage/Register"));
const Layout = lazy(() => import("./components/Layout/Layout"));
const Wallet = lazy(() => import("./pages/WalletPage/Wallet"));
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
            path="/reports"
            element={
              <PrivateRoute token={token}>
                <ReportsPage />
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
