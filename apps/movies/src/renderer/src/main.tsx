import './assets/main.css'
import ReactDOM from 'react-dom/client'
import { store } from './store.js'
import { Provider } from 'react-redux'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './error-page'
import Top from './components/header/top'
import Root from './routes/root'
import Details from './routes/movie-details'
import ToastComponent from '@renderer/utils/error'

const router = createHashRouter([
  {
    path: '/',
    element: (
      <>
        <ToastComponent />
        <Top />
        <Root />
      </>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: '/details/:id',
    element: (
      <>
        <ToastComponent />
        <Top withSearch={false} />
        <Details />
      </>
    ),
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
