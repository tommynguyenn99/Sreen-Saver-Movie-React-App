import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// import store from './store' 
// import { Provider } from 'react-redux' 
// ReactDOM.render( 
// <Provider store={store}> 
// <App /> 
// </Provider>, 
// document.getElementById('root') 
// )  