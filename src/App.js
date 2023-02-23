import { useEffect, lazy, useState, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Loader } from "./components/Loader/Loader";
import { theme, darkTheme } from "./utils/theme";
import { ThemeProvider } from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const token = false;

const Home = lazy(() => import("./pages/Home/Home"));
const Layout = lazy(() => import("./components/Layout/Layout"));
const Wallet = lazy(() => import("./pages/Wallet/Wallet"));
const Statistics = lazy(() => import("./pages/Statistics/Statistics"));

const PrivateRoute = ({ children, token }) => {
  return !token ? children : <>Поміняйте token в APP на false</>;
};

const PublicRoute = ({ children, token }) => {
  return token ? children : <>Поміняйте token в APP на true</>;
};

export function App() {
  const isLoggedIn = true;

  return (
    <ThemeProvider theme={theme}>
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
                  <Home />
                </PublicRoute>
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
