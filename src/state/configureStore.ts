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

export interface IPost {
  text?: string;
  author?: string;
}

export interface AppState {
  readonly posts: IPost[];
  readonly loading: boolean;
  readonly error: boolean;
};

sagaMiddleware.run(rootSaga);

export default function configureStore() {
  return store;
}
