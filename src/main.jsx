import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import Store from "./Redux/Store.jsx";

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
    <Provider store={Store}>
        <App />
    </Provider>
);