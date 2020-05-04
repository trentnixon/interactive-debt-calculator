import { createStore, applyMiddleware } from "redux";
//import {Provider} from "react-redux"
import reducer from "../reducers";
//import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
//const middleware = applyMiddleware(promise(), thunk);

const store = createStore(reducer, applyMiddleware(thunk));

/*
import { createStore, applyMiddleware } from "redux";
//import { createLogger } from 'redux-logger'
import logger from 'redux-logger'
import thunk from "redux-thunk";
//import thunkMiddleware from 'redux-thunk'
import promise from "redux-promise-middleware";
import reducer from "../reducers";

// ,createLogger()
//const middleware = applyMiddleware(promise(), thunk);
const store = createStore(reducer,applyMiddleware(promise(), thunk));
/*
const store = createStore(
    reducer,
    applyMiddleware(middleware, logger)
  )
*/
export default store;  

