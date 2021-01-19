import React from 'react';
import ReactDOM from 'react-dom'; 
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './App'; 
import * as serviceWorker from './serviceWorker';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(ReduxThunk),
  
);

const store = createStore(
  rootReducer,
  enhancer
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
      <App /> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
