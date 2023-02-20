import { Suspense } from "react";
import { Loader } from "./components/Loader/Loader";
import { Layout } from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const isLoggedIn = false;

  return (
    <Suspense fallback={<Loader />}>
      <Layout />
      <Home />
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <ProtectedRoute
                isAllowed={!isLoggedIn}
                redirectPath="transaction"
              >
                <Home />
              </ProtectedRoute>
            }
          /> */}
      {/* <Route
            path="transaction"
            element={
              <ProtectedRoute isAllowed={isLoggedIn} redirectPath="/">
                <Report />
              </ProtectedRoute>
            }
          ></Route> */}
      {/* <Route
            path="report"
            element={
              <ProtectedRoute isAllowed={isLoggedIn} redirectPath="/">
                <ExpensesReportPage />
              </ProtectedRoute>
            }
          ></Route> */}
      {/* </Route>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="api/auth/google-redirect" element={<GoogleLoader />} />
      </Routes> */}
    </Suspense>
  );
}
export default App;
