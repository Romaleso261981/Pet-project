import { lazy, Suspense, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Loader } from "./components/Loader/Loader";

import { theme, darkTheme } from "./utils/theme";
import { ThemeProvider } from "styled-components";
import { getMode } from "./redux/theme/themeSelector";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const LoginPage = lazy(() => import("./pages/LoginsPage/LoginPage"));
const Register = lazy(() => import("./pages/RegisterPage/Register"));
const Layout = lazy(() => import("./components/Layout/Layout"));
const Wallet = lazy(() => import("./pages/WalletPage/Wallet"));
const ReportsPage = lazy(() => import("./pages/ReportsPage/ReportsPage"));

export function App() {
  const [isHintShown, setIsHintShown] = useState(false);
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
                <LoginPage />
              </Suspense>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/wallet"
            element={
              <Suspense fallback={<Loader />}>
                <Wallet
                  setIsHintShown={setIsHintShown}
                  isHintShown={isHintShown}
                />
              </Suspense>
            }
          />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="*" element={<h1>Невірно прописаний шлях</h1>} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
