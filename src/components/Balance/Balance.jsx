import style from "./Balance.module.scss";
import { GoGraph } from "react-icons/go";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "../Container/Container";
import ModalWithoutBalance from "../Modals/ModalWithoutBalance/ModalWithoutBalance";
import addBalanceByUser from "../../redux/balance/operations";
import userBalance from "../../redux/balance/selectorBalance";
const Balance = () => {
  const dispatch = useDispatch();
  const currentBalance = useSelector(userBalance);
  const location = useLocation();
  console.log(location.pathname);
  const walletPage = location.pathname === "/reports";

  const [balance, setBalance] = useState("00.00");

  const addUserBalance = () => {
    const newBalance = Number(balance);
    if (newBalance < 0) {
      return alert("Balance should be positive :)");
    }
    dispatch(addBalanceByUser(newBalance));
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
        </div>
        {(currentBalance === "00.00" || balance === "00.00") && (
          <ModalWithoutBalance />
        )}

        <button className={style.buttonConfirm} onClick={addUserBalance}>
          confirm
        </button>
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
