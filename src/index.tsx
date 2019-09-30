import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import configuredStore from "state/configureStore";

const store = configuredStore();

render(
    (
        <Provider store={store}>
            <App />
        </Provider>
    ),
    document.getElementById("root"),
);

serviceWorker.unregister();
