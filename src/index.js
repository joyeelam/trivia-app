import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'

import Reducer from './utils/Reducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import {AuthProvider} from './utils/AuthContext'

const store = createStore(Reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
