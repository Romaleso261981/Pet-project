import style from "./Balance.module.scss";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GoGraph } from "react-icons/go";
import { Container } from "../Container/Container";
import ModalWithoutBalance from "../Modals/ModalWithoutBalance/ModalWithoutBalance";
import { NavLink } from "react-router-dom";
import { addBalanceByUser } from "redux/balance/operations";

import userBalance from "redux/balance/selectorBalance";

export const Balance = () => {
  const dispatch = useDispatch();
  const currentBalance = useSelector(userBalance);

  const [balance, setBalance] = useState("00.00");

  const handleChange = (e) => {
    setBalance(e.target.value);
  };

  useEffect(() => {
    setBalance(currentBalance);
  }, [currentBalance]);

  const addUserBalance = () => {
    const newBalance = Number(balance);
    if (newBalance <= 0) {
      return alert("Balance should be positive :)");
    }
    dispatch(addBalanceByUser(newBalance));
  };

  return (
    <Container>
      <div className={style.containers}>
        <div className={style.flex}>
          <p className={style.title}>Balance:</p>
          <div className={style.mobile}>
            <input
              className={style.inputBalance}
              type="number"
              name="balance"
              placeholder="0.00"
              style={{ color: "#000000" }}
              value={balance}
              onChange={handleChange}
            />
            <span className={style.uah}> UAH</span>
          </div>
          {/* {balance === 0 && <ModalWithoutBalance />} */}
          {false && <ModalWithoutBalance />}

          <button className={style.buttonConfirm} onClick={addUserBalance}>
            confirm
          </button>
        </div>
        <button className={style.report}>
          Reports <GoGraph className={style.icon} />
        </button>
        {/* <NavLink
          to="/report"
          className={style.report}
          end
        >
          Reports <GoGraph className={style.icon} />
        </NavLink> */}
      </div>
    </Container>
  );
};
