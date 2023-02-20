import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";

// const basename =
//   process.env.NODE_ENV !== "production"
//     ? "/final-project-team5-front"
//     : "/final-project-team5-front/";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      {/* <BrowserRouter basename={basename}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </BrowserRouter> */}
    </PersistGate>
  </Provider>
);
