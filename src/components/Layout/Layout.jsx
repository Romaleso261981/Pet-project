// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import authOperations from "redux/auth/auth-operations";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { AnimatedCabbagesBg } from "../../components/AnimatedBg/AnimatedBg";
import { AnimatedBottomCabbages } from "../../components/AnimatedCabbagesBottom/AnimatedCabbagesBottom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Layout = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(authOperations.fetchCurrentUser());
  // });

  return (
    <>
      <Header />
      <AnimatedCabbagesBg />
      <AnimatedBottomCabbages />
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default Layout;
