import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import UserSaga from './saga';


import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware()
const middleware = [];

middleware.push(sagaMiddleware);

const composer = compose(
    applyMiddleware(...middleware),
);

const store = createStore(
    reducers,
    composer
);

sagaMiddleware.run(UserSaga);

export default store;
