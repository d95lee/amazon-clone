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
import { deleteCartItem, editCartItem, postCartItem } from './utils/cartItemApiUtils.js'
import { changeCartItem, clearCartItem, createCartItem, fetchCartItem, fetchCartItems } from './store/cartItemReducer.js'


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

  window.fetchCartItem = fetchCartItem
  window.fetchCartItems = fetchCartItems
  window.createCartItem = createCartItem
  window.changeCartItem = changeCartItem
  window.clearCartItem = clearCartItem

  window.postCartItem = postCartItem
  window.editCartItem = editCartItem
  window.deleteCartItem = deleteCartItem


  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Provider store={store}>
      <App />
      </Provider>
    </React.StrictMode>,
  )
}

restoreSession().then(initializeApp)