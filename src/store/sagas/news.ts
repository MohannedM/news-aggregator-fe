import { put } from "redux-saga/effects";
import { getNewsFeedFail, getNewsFeedStart, getNewsFeedSuccess, getSearchDetailsDone, getSearchDetailsStart } from "../actions";
import { GetNewsFeed, GetNewsFeedResponse, GetSearchDetails, GetSearchDetailsResponse } from "../types/news.module";
import axios from "axios";



export function* getSearchDetailsSaga(action: GetSearchDetails) {
    try {
        yield put(getSearchDetailsStart())
        const response: GetSearchDetailsResponse = yield axios.get("http://127.0.0.1:8000/api/get-search-params" , {
            'headers': {
                'Accept': 'application/json',
                'Authorization': `Bearer ${action.token}`,
            },
        })

        yield put(getSearchDetailsDone(response.data))
    }
    catch(_) {
        yield put(getSearchDetailsDone())
    }
}

export function* getNewsFeedSaga(action: GetNewsFeed) {
    try {
        yield put(getNewsFeedStart())
        const response: GetNewsFeedResponse = yield axios.get("http://127.0.0.1:8000/api/get-news-feed" , {
            'headers': {
                'Accept': 'application/json',
                'Authorization': `Bearer ${action.token}`,
            },
        })

        yield put(getNewsFeedSuccess(response.data.news))
    }
    catch(err: any) {
        yield put(getNewsFeedFail(err.response.data.message))
    }
}