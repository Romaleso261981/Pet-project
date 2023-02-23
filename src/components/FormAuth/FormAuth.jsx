// import { Container } from "../Container/Container"

import { useState } from "react"
import { useDispatch } from "react-redux"

import { logIn, register } from "../../redux/auth/operations";
import google from "../../assets/image/google.png"
import styled from "./FormAuth.module.scss"

export const FormAuth = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emptyInput, setEmptyInput] = useState(false)
  const [invalidEmail, setInvalidEmail] = useState(false)
  const [shortLengthPassword, setShortLengthPassword] = useState(false)
  const dispatch = useDispatch()


   const handleChange = (evt) => {
     setEmptyInput(false)

     switch (evt.target.name) {
       case "email":
         setEmail(evt.target.value)
         break

       case "password":
         setPassword(evt.target.value)
         break

       default:
         return
     }
  }
  
   const checkValidData = () => {
     if (email === "") {
       setEmptyInput(true)
     }

     if (!email.includes("@")) {
       setInvalidEmail(true)
     }
     if (password.length < 8) {
       setShortLengthPassword(true)
     }

     return
   }

  const handleLogin = (evt) => {
    evt.preventDefault()
    const credentials = { email, password }

    if (checkValidData()) {
      return
    }
    dispatch(logIn(credentials))

    resetForm()
  }

   const handleRegister = () => {
     const credentials = { email, password }
     if (checkValidData()) {
       return
     }
     dispatch(register(credentials))
       .unwrap()
       .then(() => dispatch(logIn(credentials)))
  }
  
  
  const resetForm = () => {
    setEmail("")
    setPassword("")
  }

  return (
    <div className={styled.auth}>
      <div className={styled.google__auth}>
        <p className={styled.google__auth_title}>
          You can log in with your Google Account:
        </p>
        <a className={styled.google__auth_btn} href="">
          <img
            src={google}
            alt="google"
            className={styled.google__auth_btn_img}
          />
          <span className={styled.google__auth_btn_title}>Google</span>
        </a>
      </div>
      <div className={styled.form__wrapper}>
        <p className={styled.form__wrapper_text}>
          Or log in using an email and password, after registering:
        </p>
        <form
          autoComplete="on"
          onSubmit={handleLogin}
          className={styled.form__auth}
        >
          <label htmlFor="email" className={styled.form__auth_label}>
            {emptyInput ? (
              <>
                <span>
                  <span className={styled.span__label}>*</span>
                  Email:
                </span>
              </>
            ) : (
              "Email:"
            )}
            <input
              className={styled.form__auth_input}
              autoComplete="off"
              type="text"
              placeholder="your@email.com"
              value={email}
              name="email"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email" className={styled.form__auth_label}>
            {emptyInput ? (
              <>
                <span>
                  <span className={styled.span__label}>*</span>
                  Password:
                </span>
              </>
            ) : (
              "Password:"
            )}
            <input
              className={styled.form__auth_input}
              autoComplete="off"
              type="password"
              placeholder="Password"
              value={password}
              name="password"
              onChange={handleChange}
            />
          </label>
          <ul className={styled.list__button}>
            <li className={styled.list__button_item}>
              <button className={styled.form__auth_login} type="submit">
                LOG IN
              </button>
            </li>
            <li className={styled.list__button_item}>
              <button
                className={styled.form__auth_register}
                type="button"
                onClick={handleRegister}
              >
                REGISTRATION
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  )
}
