import React from 'react';
import ReactDOM from 'react-dom';
import { ReactQueryCacheProvider, QueryCache } from 'react-query'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { configureStore } from './store'

const queryCache = new QueryCache()
const appStore = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Provider store={appStore}>
        <App />
      </Provider>
    </ReactQueryCacheProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
