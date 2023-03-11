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
  ExitText,
  ExitSvg,
  ControlsWrapper,
  BtnsWrapper,
} from "./Header.styled";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { selectAccessToken } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import svg from "../../assets/image/icons_sprite.svg";
import { Popup } from "../Popup/Popup";
import { NavLink } from "../NavLink/NavLink";
import { ThemeSwitcher } from "../ThemeBtn/ThemeBtn";
import { LangSwitcher } from "../LanguageBtn/LangBtn";
import { getLang } from "../../redux/lang/langSelectors";

export function Header() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const token = useSelector(selectAccessToken);

  const [popup, setPopup] = useState({
    isShow: false,
    title: "",
    action: null,
  });

  const lang = useSelector(getLang).lang;

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

  return (
    <>
      <StyledHeader>
        <LogoContainer>
          <Block />
          <LogoSvg>
            <use href={`${svg}#logo`}></use>
          </LogoSvg>
        </LogoContainer>
        <BtnsWrapper>
          <NavLink text="На головну" to="wallet" />
        </BtnsWrapper>
        <ControlsWrapper>
          <ThemeSwitcher />
          <LangSwitcher />
          {token && (
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
          )}
        </ControlsWrapper>
      </StyledHeader>
      {popup.isShow && <Popup popup={popup} setPopup={setPopup} />}
    </>
  );
}
