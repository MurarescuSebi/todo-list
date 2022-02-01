import { createStore, applyMiddleware, compose } from 'redux';
//logger import for dev
import { rootReducers } from './rootReducers';
import thunkMiddleware from 'redux-thunk';

declare global {
  //__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ for dev only
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const middlewareEnhancer = applyMiddleware(thunkMiddleware);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

type RootReducerType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducerType>;

const store = createStore(rootReducers, composeEnhancers(middlewareEnhancer));
export default store;
