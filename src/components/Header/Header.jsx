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
} from "./Header.styled";
// import { useAuth } from "hooks";
import { useDispatch } from "react-redux";
// import { useState } from "react";
// import { getToken } from "redux/auth/authSelectors";
import { logOut } from "../../redux/auth/operations";
import svg from "../../assets/image/icons_sprite.svg";
import { Popup } from "components/Popup/Popup";
import { ThemeSwitcher } from "components/ThemeBtn/ThemeBtn";
// import { LangSwitcher } from "components/LanguageBtn/LangBtn";
// import { getLang } from "redux/lang/langSelectors";

export function Header() {
  const dispatch = useDispatch();
  // const { user } = useAuth();
  const user = {
    email: "leso81@gmail.com",
  };
  // const token = useSelector(getToken);
  const token = true;
  // const [popup, setPopup] = useState({
  //   isShow: false,
  //   title: "",
  //   action: null,
  // });

  // const lang = useSelector(getLang).lang;
  const lang = "en";

  const handleExit = () => {
    dispatch(logOut());
    // setPopup({
    //   isShow: true,
    //   title:
    //     "en" === "en"
    //       ? "Do you really want to leave?"
    //       : "Ви дійсно бажаєте вийти?",
    //   // action: () => dispatch(logoutUser()),
    // });
    // document.querySelector("modal-root").classList.add("js-action");
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
          {/* <LangSwitcher /> */}
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
      {false && <Popup />}
    </>
  );
}
