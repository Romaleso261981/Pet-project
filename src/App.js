import { Loader } from "./components/Loader/Loader";
import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "routes/ProtectedRoute";
import { Layout } from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const isLoggedIn = false;

  return (
    <>
      <Layout />
      <Home />
    </>
  );
}
export default App;
