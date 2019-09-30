import { call, put } from "redux-saga/effects";
import axios from "axios";

export const types = {
    GET_POSTS_REQUESTED: 'crud-app/posts/GET_POSTS_REQUESTED',
    GET_POSTS_SUCCEED: 'crud-app/posts/GET_POSTS_SUCCEED',
    GET_POSTS_FAILED: 'crud-app/posts/GET_POSTS_FAILED',
    GET_POST_REQUESTED: 'crud-app/posts/GET_POST_REQUESTED',
    GET_POST_SUCCEED: 'crud-app/posts/GET_POST_SUCCEED',
    GET_POST_FAILED: 'crud-app/posts/GET_POST_FAILED',
    ADD_POST_REQUESTED: 'crud-app/posts/ADD_POST_REQUESTED',
    ADD_POST_SUCCEED: 'crud-app/posts/ADD_POST_SUCCEED',
    ADD_POST_FAILED: 'crud-app/posts/ADD_POST_FAILED',
    DELETE_POST_REQUESTED: 'crud-app/posts/DELETE_POST_REQUESTED',
    DELETE_POST_SUCCEED: 'crud-app/posts/DELETE_POST_SUCCEED',
    DELETE_POST_FAILED: 'crud-app/posts/DELETE_POST_FAILED',
    EDIT_POST_REQUESTED: 'crud-app/posts/EDIT_POST_REQUESTED',
    EDIT_POST_SUCCEED: 'crud-app/posts/EDIT_POST_SUCCEED',
    EDIT_POST_FAILED: 'crud-app/posts/EDIT_POST_FAILED'
}

export function getPostsRequested(author) {
    return { type: types.GET_POSTS_REQUESTED, author }
}

export function getPostsSucceed(posts) {
    return { type: types.GET_POSTS_SUCCEED, posts }
}

export function getPostsFailed() {
    return { type: types.GET_POSTS_FAILED }
}

export function getPostRequested(post_id) {
    return { type: types.GET_POST_REQUESTED, post_id }
}

export function getPostSucceed(post) {
    return { type: types.GET_POST_SUCCEED, post }
}

export function getPostFailed() {
    return { type: types.GET_POST_FAILED }
}

export function addPostRequested(author, date, text) {
    return { type: types.ADD_POST_REQUESTED, author, date, text }
}

export function addPostSucceed(post) {
    return { type: types.ADD_POST_SUCCEED, post }
}

export function addPostFailed() {
    return { type: types.ADD_POST_FAILED }
}

export function deletePostRequested(post_id) {
    return { type: types.DELETE_POST_REQUESTED, post_id }
}

export function deletePostSucceed(post_id) {
    return { type: types.DELETE_POST_SUCCEED, post_id }
}

export function deletePostFailed() {
    return { type: types.DELETE_POST_FAILED }
}

export function editPostRequested(post_id, date, text) {
    return { type: types.EDIT_POST_REQUESTED, post_id, date, text }
}

export function editPostSucceed(post_id, text) {
    return { type: types.EDIT_POST_SUCCEED, post_id, text }
}

export function editPostFailed() {
    return { type: types.EDIT_POST_FAILED }
}

export default function posts(state = {}, action) {
    switch (action.type) {
        case types.GET_POSTS_REQUESTED:
            return { ...state, loading: true, error: false}
        case types.GET_POSTS_SUCCEED:
            return { ...state, posts: action.payload, loading: false, error: false }
        case types.GET_POSTS_FAILED:
            return { ...state, loading: false, error: true}
        case types.GET_POST_REQUESTED:
            return { ...state, loading: true, error: false}
        case types.GET_POST_SUCCEED:
            return { ...state, posts: [...state.posts, ...action.payload], loading: false, error: false }
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
            return { ...state, loading: false, error: true}
        default:
            return state
    }
}

export function* fetchPosts(action) {
    try {
        const result = yield call(action.author)

        yield put(getPostsSucceed())
    } catch (error) {
        yield put(getPostsFailed())
    }
}

export function* fetchPost(action) {
    try {
        const result = yield call(action.post_id)

        yield put(getPostSucceed())
    } catch (error) {
        yield put(getPostFailed())
    }
}

export function* sendPost(action) {
    try {
        const result = yield call(action.author, action.date, action.text)

        yield put(addPostSucceed())
    } catch (error) {
        yield put(addPostFailed())
    }
}

export function* deletePost(action) {
    try {
        const result = yield call(action.post_id)

        yield put(deletePostSucceed())
    } catch (error) {
        yield put(deletePostFailed())
    }
}

export function* editPost(action) {
    try {
        const result = yield call(action.post_id, action.date, action.text)

        yield put(editPostSucceed(action.post_id, action.text))
    } catch (error) {
        yield put(editPostFailed())
    }
}