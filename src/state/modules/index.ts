import { combineReducers } from "redux";

import posts from "state/modules/posts";

const rootReducer = combineReducers({
    posts,
});

export default rootReducer;
