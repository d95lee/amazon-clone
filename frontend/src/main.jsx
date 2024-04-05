import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import configureStore from './store/store.js'
import { restoreSession } from './utils/csrfUtils.js'
import { deleteSession, postSession, postUser } from './utils/sessionApiUtils.js'
import { createUser, loginUser, logoutUser } from './store/sessionReducer.js'
import { fetchProduct, fetchProducts } from './store/productReducer.js'
import './components/global.css'

const initializeApp = () => {
  const store = configureStore();

  window.store = store;
  window.postUser = postUser;
  window.postSession = postSession;
  window.deleteSession = deleteSession;
  window.createUser = createUser;
  window.loginUser = loginUser;
  window.logoutUser = logoutUser;

  window.fetchProducts = fetchProducts
  window.fetchProduct = fetchProduct


  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Provider store={store}>
      <App />
      </Provider>
    </React.StrictMode>,
  )
}

restoreSession().then(initializeApp)