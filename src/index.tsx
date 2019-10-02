import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import configureStore from "state/configureStore";

const store = configureStore();

function render() {
    ReactDOM.render(
        (
            <Provider store={store}>
                <App />
            </Provider>
        ),
        document.getElementById("root"),
    );
}

render();
store.subscribe(render);

serviceWorker.unregister();
