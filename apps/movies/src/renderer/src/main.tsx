import './assets/main.css'
import ReactDOM from 'react-dom/client'
import { store } from './store.js'
import { Provider } from 'react-redux'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './error-page'
import Root from './routes/root'
import Details from './routes/movie-details'
import Top from './components/top'
import { StrictMode } from 'react'

const router = createHashRouter([
  {
    path: '/',
    element: (
      <>
        <Top />
        <Root />
      </>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: 'details/:id',
    element: (
      <>
        <Top withSearch={false} />
        <Details />
      </>
    ),
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
