import style from "./Balance.module.scss";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GoGraph } from "react-icons/go";
import { Container } from "../Container/Container";
import ModalWithoutBalance from "../Modals/ModalWithoutBalance/ModalWithoutBalance";
import { NavLink } from "react-router-dom";
// import { addBalanceByUser } from "../../redux/balance/operations";

import userBalance from "../../redux/balance/selectorBalance";

const Balance = () => {
  const dispatch = useDispatch();
  const currentBalance = Number(useSelector(userBalance)).toFixed(2);

  const [balance, setBalance] = useState(currentBalance && "00.00");

  const handleChange = (e) => {
    setBalance(e.target.value);
  };

  useEffect(() => {
    setBalance(currentBalance);
  }, [currentBalance]);

  const addUserBalance = () => {
    setBalance((prev) => currentBalance);
    console.log(currentBalance);
    const newBalance = Number(balance);
    if (newBalance < 0) {
      return alert("Balance should be positive :)");
    }
    // dispatch(addBalanceByUser(newBalance));
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
          {balance === 0 && <ModalWithoutBalance />}

          <button className={style.buttonConfirm} onClick={addUserBalance}>
            confirm
          </button>
        </div>

        <NavLink to="/report" className={style.report} end>
          Reports <GoGraph className={style.icon} />
        </NavLink>
      </div>
    </Container>
  );
};

export default Balance;
