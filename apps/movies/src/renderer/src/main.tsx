import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { store } from './store.js'
import { Provider } from 'react-redux'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './error-page'
import Root from './routes/root'
import Details from './routes/movie-details'

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: 'details/:IMDBId',
    element: <Details />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
