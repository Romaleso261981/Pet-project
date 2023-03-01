import style from "./Balance.module.scss";
import { GoGraph } from "react-icons/go";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ModalWithoutBalance from "../Modals/ModalWithoutBalance/ModalWithoutBalance";
import { addBalanceByUser } from "../../redux/balance/operations";
import { getBalance } from "../../redux/balance/operations";
import { userBalance } from "../../redux/balance/selectorBalance";
import { getData } from "../../redux/balance/selectorBalance";

const Balance = () => {
  const dispatch = useDispatch();
  const currentBalance = useSelector(userBalance);
  const arr = useSelector(getData);
  const location = useLocation();
  console.log(arr);
  // console.log(location.pathname);
  const walletPage = location.pathname === "/reports";
  // const walletPage = location.pathname === "/wallet";

  const [balance, setBalance] = useState("00.00");

  // const addUserBalance = () => {
  //   const newBalance = Number(balance);
  //   if (newBalance < 0) {
  //     return alert("Balance should be positive :)");
  //   }
  //   dispatch(addBalanceByUser(newBalance));
  // };
  const getUserBalance = () => {
    console.log("getUserBalance");
    // const newBalance = Number(balance);
    // if (newBalance < 0) {
    //   return alert("Balance should be positive :)");
    // }
    dispatch(getBalance());
  };

  const handleChange = (e) => {
    setBalance(e.target.value);
  };

  useEffect(() => {
    setBalance(currentBalance);
  }, [currentBalance]);

  return (
    <div className={style.containers}>
      <div className={style.flex}>
        <p className={style.title}>Balance:</p>
        <div className={style.mobile}>
          <input
            className={style.inputBalance}
            type="number"
            name="balance"
            placeholder="00.00"
            style={{ color: "#000000" }}
            value={balance}
            onChange={handleChange}
          />
          <span className={style.uah}> UAH</span>

          {(currentBalance === "00.00" || balance === "00.00") && (
            <ModalWithoutBalance />
          )}

          <button className={style.buttonConfirm} onClick={getUserBalance}>
            confirm
          </button>
        </div>
      </div>
      {!walletPage && (
        <NavLink to="/reports" className={style.report}>
          Reports <GoGraph className={style.icon} />
        </NavLink>
      )}

      {walletPage}
    </div>
  );
};

export default Balance;
