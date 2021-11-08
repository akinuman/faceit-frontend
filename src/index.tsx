import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
//Style
import GlobalStyle from './GlobalStyle';
import App from './app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <Provider store={store}>
    <ToastContainer />
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);
