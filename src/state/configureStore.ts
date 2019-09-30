import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./modules/index";
import rootSaga from "./sagas";

declare global {
    interface Window { MyNamespace: any; }
}

window.MyNamespace = window.MyNamespace || {};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

export type AppState = ReturnType<typeof rootReducer>;

sagaMiddleware.run(rootSaga);

export default function configureStore() {
  return store;
}