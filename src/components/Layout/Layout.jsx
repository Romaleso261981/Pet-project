// import { Outlet } from "react-router-dom";
// import { Header } from "../Header/Header";
// import styled from "./Layout.module.scss";
// import { Container } from "../../components/Container/Container";

// export const Layout = () => {
//   return (
//     <>
//       <Header />
//       <main>
//         <Container>
//           <div className={styled.hero}>
//             <div>
//               <h1 className={styled.hero__title}>Kapu$ta</h1>
//               <p className={styled.hero__text}>Smart Finance</p>
//             </div>
//           </div>
//           <Outlet />
//         </Container>
//       </main>
//     </>
//   );
// };

// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import authOperations from "redux/auth/auth-operations";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

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
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default Layout;
