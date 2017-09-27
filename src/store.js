import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import { reducers } from './reducers';
import sagas from './sagas';



// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = applyMiddleware(routerMiddleware(history), sagaMiddleware);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(reducers, middleware);

// then run the saga
sagaMiddleware.run(sagas)

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))
export { store, history };