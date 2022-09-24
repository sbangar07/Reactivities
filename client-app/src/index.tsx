import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./app/layout/styles.css";
import App from "./app/layout/App";
import 'react-calendar/dist/Calendar.css';
import reportWebVitals from "./reportWebVitals";
import { store, StoreContext } from "./app/stores/store";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root")!;
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <StoreContext.Provider value={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreContext.Provider>
);

// ReactDOM.render(
//   <StoreContext.Provider value={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StoreContext.Provider>,
//   document.getElementById('root')
// );

// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);

// const container = document.getElementById('app');
// const root = createRoot(document.getElementById('app')); // createRoot(container!) if you use TypeScript

// root.render(<StoreContext.Provider value={store}>
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// </StoreContext.Provider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
