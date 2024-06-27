//react
import React from 'react'

//react routes
import ReactDOM from 'react-dom/client'
import Routes from './Routes.tsx'

//redux
import { Provider } from 'react-redux';
import store from './store.ts';

//css diverses
import './index.css'
import './output.css'
import 'normalize.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
)
