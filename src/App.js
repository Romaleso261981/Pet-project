import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { Loader } from "./components/Loader/Loader";

import { theme, darkTheme } from "./utils/theme";
import { ThemeProvider } from "styled-components";
import { getMode } from "./redux/theme/themeSelector";
import { selectIsLoggedIn } from "./redux/auth/selectors";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const LoginPage = lazy(() => import("./pages/LoginsPage/Logins"));
const Register = lazy(() => import("./pages/RegisterPage/Register"));
const Layout = lazy(() => import("./components/Layout/Layout"));
const Wallet = lazy(() => import("./pages/WalletPage/Wallet"));
const ReportsPage = lazy(() => import("./pages/ReportsPage/ReportsPage"));

const PrivateRoute = ({ children, isLogin }) => {
  return !isLogin ? children : <Navigate to="/" />;
};

const PublicRoute = ({ children, isLogin }) => {
  return isLogin ? children : <Navigate to="/register" />;
};

export function App() {
  const isLogin = useSelector(selectIsLoggedIn);
  console.log(isLogin);
  const selectedMode = useSelector(getMode);
  const themeMode = selectedMode.mode === "light" ? darkTheme : theme;

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
                <PublicRoute isLogin={isLogin}>
                  <LoginPage />
                </PublicRoute>
              </Suspense>
            }
          />
          <Route
            path="/register"
            element={
              <Suspense fallback={<Loader />}>
                <PrivateRoute isLogin={isLogin}>
                  <Register />
                </PrivateRoute>
              </Suspense>
            }
          />
          <Route
            path="/wallet"
            element={
              <Suspense fallback={<Loader />}>
                <PrivateRoute isLogin={isLogin}>
                  <Wallet />
                </PrivateRoute>
              </Suspense>
            }
          />
          <Route
            path="/reports"
            element={
              <PrivateRoute isLogin={isLogin}>
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
