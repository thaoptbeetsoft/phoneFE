import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import gameReducer from "./Reducers";
import watcherSagas from "./Sagas";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(gameReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcherSagas);
export default store;