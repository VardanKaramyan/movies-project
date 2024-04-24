import { useRouteError } from 'react-router-dom'

interface RouteError {
  statusText?: string
  message?: string
  data?: string
  status?: number
  error?: { message: string; stack: string }
}

export default function ErrorPage(): JSX.Element {
  const error = useRouteError() as RouteError | undefined
  console.error(error)

  return (
    <div id="error-page" className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4 dark:text-white">Oops!</h1>
      <p className="text-lg mb-4 dark:text-gray-300">Sorry, an unexpected error has occurred.</p>
      <p className="italic mb-4 dark:text-gray-400">
        {error?.status} {error?.statusText || error?.message}
      </p>
      <p className="italic mb-4 dark:text-gray-400">{error?.data}</p>
      <p className="text-sm dark:text-gray-400">Please check the console for more information.</p>
    </div>
  )
}
