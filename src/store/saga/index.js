import { takeLatest, all } from 'redux-saga/effects';
import { addUser as user } from './user';


export default function* rootSaga() {
    yield all([
        takeLatest('ADD_USER', user)
    ]);
};