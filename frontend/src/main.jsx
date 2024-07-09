import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './components/global.css'
import { Provider } from 'react-redux'
import configureStore from './store/store.js'
import { restoreSession } from './utils/csrfUtils.js'

const initializeApp = () => {
  const store = configureStore();

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  )
}

restoreSession().then(initializeApp)