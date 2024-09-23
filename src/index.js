import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from "./store/store";
import { Provider } from 'react-redux';

export const MyContext = React.createContext()

const root = ReactDOM.createRoot(document.getElementById('root'));
const renderEntireTree = () => {
  root.render(
    // <React.StrictMode>
      <BrowserRouter>
        <Provider store = {store}>
            <App 
              // state={store.getState()}
              // dispatch={store.dispatch.bind(store)}
              />
        </Provider>
      </BrowserRouter>
    // </React.StrictMode>
  );
};
window.store = store;
renderEntireTree(store.getState());
reportWebVitals();
store.subscribe(renderEntireTree);


