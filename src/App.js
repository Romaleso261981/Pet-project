import { useEffect, lazy, useState, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Loader } from "./components/Loader/Loader";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const token = true;

const Home = lazy(() => import("./pages/Home/Home"));
const Layout = lazy(() => import("./components/Layout/Layout"));

const PrivateRoute = ({ children, token }) => {
  return !token ? children : <Navigate to="/" />;
};

const PublicRoute = ({ children, token }) => {
  return token ? children : <>нетуда</>;
};

export function App() {
  const isLoggedIn = false;

  return (
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
          path="/register"
          element={
            <Suspense fallback={<Loader />}>
              <PublicRoute token={token}>
                <>registry</>
              </PublicRoute>
            </Suspense>
          }
        />
        <Route
          path="/wallet"
          element={
            <PrivateRoute token={token}>
              <>Wallet</>
            </PrivateRoute>
          }
        />
        <Route
          path="/statistics"
          element={
            <PrivateRoute token={token}>
              <>Static</>
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/wallet" />} />
      </Route>
    </Routes>
  );
}
export default App;
