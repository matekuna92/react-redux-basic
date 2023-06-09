import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
//import productsReducer from './store/reducers/productsReducer';
// const rootReducer = combineReducers({
//     shop: productsReducer
// })
//const store = createStore(rootReducer);

// this is the default export there, so naming doesnt matter
import ProductsProvider from './context/products-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
