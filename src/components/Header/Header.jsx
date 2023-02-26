import {
  StyledHeader,
  LogoContainer,
  Block,
  LogoSvg,
  StyledContainer,
  Img,
  Avatar,
  Name,
  Line,
  Exit,
  RegisterText,
  ExitText,
  ExitSvg,
  ControlsWrapper,
} from "./Header.styled";
// import { useAuth } from "hooks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAccessToken } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import svg from "../../assets/image/icons_sprite.svg";
import rsvg from "../../assets/icons/symbol-defs.svg";
import { Popup } from "components/Popup/Popup";
import { ThemeSwitcher } from "components/ThemeBtn/ThemeBtn";
import { LangSwitcher } from "components/LanguageBtn/LangBtn";
import { getLang } from "redux/lang/langSelectors";

export function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { user } = useAuth();
  const user = {
    email: "leso81@gmail.com",
  };
  const token = useSelector(getAccessToken);
  const [popup, setPopup] = useState({
    isShow: false,
    title: "",
    action: null,
  });

  const lang = useSelector(getLang);

  const handleExit = () => {
    setPopup({
      isShow: true,
      title:
        lang === "en"
          ? "Do you really want to leave?"
          : "Ви дійсно бажаєте вийти?",
      action: () => dispatch(logOut()),
    });
    document.querySelector("#modal").classList.add("js-action");
  };
  const register = () => {
    navigate("/register");
  };

  return (
    <>
      <StyledHeader>
        <LogoContainer>
          <Block />
          <LogoSvg>
            <use href={`${svg}#logo`}></use>
          </LogoSvg>
        </LogoContainer>
        <ControlsWrapper>
          <ThemeSwitcher />
          <LangSwitcher />
          {token ? (
            <StyledContainer>
              <Img>
                <Avatar>
                  {user?.email && user.email.slice(0, 1).toUpperCase()}
                </Avatar>
              </Img>
              <Name>{user.email}</Name>
              <Line />
              <Exit type="button" onClick={handleExit}>
                {lang === "en" ? (
                  <ExitText>Exit</ExitText>
                ) : (
                  <ExitText>Вийти</ExitText>
                )}
                <ExitSvg>
                  <use href={`${svg}#logout`}></use>
                </ExitSvg>
              </Exit>
            </StyledContainer>
          ) : (
            <Exit type="button" onClick={register}>
              {lang === "en" ? (
                <ExitText>register</ExitText>
              ) : (
                <RegisterText>Реєстрація</RegisterText>
              )}
              <ExitSvg>
                <use href={`${rsvg}#icon-registered`}></use>
              </ExitSvg>
            </Exit>
          )}
        </ControlsWrapper>
      </StyledHeader>
      {popup.isShow && <Popup popup={popup} setPopup={setPopup} />}
    </>
  );
}
