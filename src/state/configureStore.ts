import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "state/modules/index";
import rootSaga from "state/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

export type AppState = ReturnType<typeof rootReducer>;

sagaMiddleware.run(rootSaga);

export default function configureStore() {
  return store;
}
