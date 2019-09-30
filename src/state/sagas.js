import { all } from "redux-saga/effects";

import { postsSagas } from "state/modules/posts";

export default function* rootSaga() {
    yield all([
        ...postsSagas
    ])
}