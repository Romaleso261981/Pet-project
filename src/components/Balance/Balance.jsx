import style from "./Balance.module.scss";
import Notiflix from "notiflix";
import { GoGraph } from "react-icons/go";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ModalWithoutBalance from "../Modals/ModalWithoutBalance/ModalWithoutBalance";
import { Popup } from "../../components/Popup/Popup";
import { addBalanceByUser } from "../../redux/balance/operations";
import { getBalance } from "../../redux/balance/operations";
import { userBalance } from "../../redux/balance/selectorBalance";
import { getLang } from "../../redux/lang/langSelectors";
import { getData } from "../../redux/balance/selectorBalance";

const Balance = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const currentBalance = useSelector(userBalance);
  const lang = useSelector(getLang);
  const [balance, setBalance] = useState(currentBalance ?? 0);

  const walletPage = location.pathname === "/reports";

  const handleChange = ({ target: { value } }) => {
    if (+value === 0) {
      lang === "en"
        ? Notiflix.Notify.warning(`Balance cannot be "0"!`, notifySettings)
        : Notiflix.Notify.warning(
            `Баланс не повинен бути рівним "0"!`,
            notifySettings
          );
    }
    setBalance(Number(value).toFixed(2));
  };

  const onClick = () => {
    if (+balance === 0) {
      setBalance((prev) => currentBalance);
      return;
    }
    if (+balance === +currentBalance) {
      lang === "en"
        ? Notiflix.Notify.warning(
            `New balance cannot be the same!`,
            notifySettings
          )
        : Notiflix.Notify.warning(
            `Оновлений баланс має відрізнятись від попереднього!`,
            notifySettings
          );
      return;
    }
    dispatch(addBalanceByUser({ balance }));
  };

  useEffect(() => {
    dispatch(getBalance());
   
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
            style={{ color: "#000000" }}
            value={balance}
            onChange={handleChange}
          />
          <span className={style.uah}> UAH</span>
        </div>
        {(currentBalance === 0 || balance === 0) && <ModalWithoutBalance />}

        <button className={style.buttonConfirm} onClick={onClick}>
          confirm
        </button>
      </div>
      {!walletPage && (
        <NavLink to="/reports" className={style.report}>
          Reports <GoGraph className={style.icon} />
        </NavLink>
      )}
     
      {/* {walletPage} */}
    </div>
  );
};

export default Balance;
