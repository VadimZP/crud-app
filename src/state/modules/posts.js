import { call, put, takeLatest } from "redux-saga/effects";

import {
    getPostsRequest,
} from "utils/API";

export const types = {
    GET_POSTS_REQUESTED: "@crud-app/posts/GET_POSTS_REQUESTED",
    GET_POSTS_SUCCEED: "@crud-app/posts/GET_POSTS_SUCCEED",
    GET_POSTS_FAILED: "@crud-app/posts/GET_POSTS_FAILED",
    GET_POST_ITEM_REQUESTED: "@crud-app/posts/GET_POST_ITEM_REQUESTED",
    GET_POST_ITEM_SUCCEED: "@crud-app/posts/GET_POST_ITEM_SUCCEED",
    GET_POST_ITEM_FAILED: "@crud-app/posts/GET_POST_ITEM_FAILED",
    ADD_POST_ITEM_REQUESTED: "@crud-app/posts/ADD_POST_ITEM_REQUESTED",
    ADD_POST_ITEM_SUCCEED: "@crud-app/posts/ADD_POST_ITEM_SUCCEED",
    ADD_POST_ITEM_FAILED: "@crud-app/posts/ADD_POST_ITEM_FAILED",
    DELETE_POST_ITEM_REQUESTED: "@crud-app/posts/DELETE_POST_ITEM_REQUESTED",
    DELETE_POST_ITEM_SUCCEED: "@crud-app/posts/DELETE_POST_ITEM_SUCCEED",
    DELETE_POST_ITEM_FAILED: "@crud-app/posts/DELETE_POST_ITEM_FAILED",
    EDIT_POST_ITEM_REQUESTED: "@crud-app/posts/EDIT_POST_ITEM_REQUESTED",
    EDIT_POST_ITEM_SUCCEED: "@crud-app/posts/EDIT_POST_ITEM_SUCCEED",
    EDIT_POST_ITEM_FAILED: "@crud-app/posts/EDIT_POST_ITEM_FAILED",
};

export function getPostsRequested() {
    return { type: types.GET_POSTS_REQUESTED }
}

function getPostsSucceed(data) {
    return { type: types.GET_POSTS_SUCCEED, payload: data }
}

function getPostsFailed() {
    return { type: types.GET_POSTS_FAILED }
}

// export function getPostRequested(post_id) {
//     return { type: types.GET_POST_REQUESTED, post_id }
// }

// export function getPostSucceed(post) {
//     return { type: types.GET_POST_SUCCEED, post }
// }

// export function getPostFailed() {
//     return { type: types.GET_POST_FAILED }
// }

// export function addPostRequested(author, date, text) {
//     return { type: types.ADD_POST_REQUESTED, author, date, text }
// }

// export function addPostSucceed(post) {
//     return { type: types.ADD_POST_SUCCEED, post }
// }

// export function addPostFailed() {
//     return { type: types.ADD_POST_FAILED }
// }

// export function deletePostRequested(post_id) {
//     return { type: types.DELETE_POST_REQUESTED, post_id }
// }

// export function deletePostSucceed(post_id) {
//     return { type: types.DELETE_POST_SUCCEED, post_id }
// }

// export function deletePostFailed() {
//     return { type: types.DELETE_POST_FAILED }
// }

// export function editPostRequested(post_id, date, text) {
//     return { type: types.EDIT_POST_REQUESTED, post_id, date, text }
// }

// export function editPostSucceed(post_id, text) {
//     return { type: types.EDIT_POST_SUCCEED, post_id, text }
// }

// export function editPostFailed() {
//     return { type: types.EDIT_POST_FAILED }
// }

const initialState = {
    data: [], 
    loading: false, 
    error: false,
};

export default function posts(state = initialState, action) {
    switch (action.type) {
        case types.GET_POSTS_REQUESTED:
            return { ...state, loading: true, error: false}
        case types.GET_POSTS_SUCCEED:
            return { ...state, data: state.data.concat(action.payload), loading: false, error: false }
        case types.GET_POSTS_FAILED:
            return { ...state, loading: false, error: true}
       /*  case types.GET_POST_REQUESTED:
            return { ...state, loading: true, error: false}
        case types.GET_POST_SUCCEED:
            return { ...state, ...action.payload, loading: false, error: false }
        case types.GET_POST_FAILED:
            return { ...state, loading: false, error: true}
        case types.ADD_POST_REQUESTED:
            return { ...state, loading: true, error: false}
        case types.ADD_POST_SUCCEED:
            return { ...state, loading: false, error: false}
        case types.ADD_POST_FAILED:
            return { ...state, loading: false, error: true}
        case types.DELETE_POST_REQUESTED:
            return state
        case types.DELETE_POST_SUCCEED:
            return {
                ...state,
                posts: state.posts.filter(item => item.id !== action.payload),
                loading: false, 
                error: false
            }
        case types.DELETE_POST_FAILED:
            return { ...state, loading: false, error: true}
        case types.EDIT_POST_REQUESTED:
            return { ...state, loading: true, error: false}
        case types.EDIT_POST_SUCCEED:
            return { ...state, loading: false, error: false}
        case types.EDIT_POST_FAILED:
            return { ...state, loading: false, error: true} */
        default:
            return state;
    }
}

function* fetchPosts() {
    try {
        const { data } = yield call(getPostsRequest);
        console.log("TCL: function*fetchPosts -> data", data)

        yield put(getPostsSucceed(data));
    } catch (error) {
        yield put(getPostsFailed());
    }
}

export const postsSagas = [
    takeLatest(types.GET_POSTS_REQUESTED, fetchPosts),
];