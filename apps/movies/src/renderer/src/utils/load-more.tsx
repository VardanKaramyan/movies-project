import { LoadMoreSpinner } from '@renderer/components/spinners'
import { clearError } from '@renderer/features/errors/slice'
import { selectPage } from '@renderer/features/movies/slice'
import { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

interface LoadMoreToastProps {
  isAtBottom: boolean
}

const LoadMoreToast: FC<LoadMoreToastProps> = ({ isAtBottom }) => {
  const [isVisible, setIsVisible] = useState(false)
  const page = useSelector(selectPage)

  useEffect(() => {
    if (isAtBottom) setIsVisible(true)
    const timer = setTimeout(() => setIsVisible(false), 2500)

    return () => {
      clearTimeout(timer)
      clearError()
    }
  }, [page])

  return (
    <div
      className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 flex items-center w-full max-w-xs text-gray-500 transition-transform duration-1000 ease-in-out ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
      role="alert"
    >
      <div
        id="toast-success"
        className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
        role="alert"
      >
        <LoadMoreSpinner />
        <div className="ms-3 text-sm font-normal animate-pulse">
          Please Wait. Loading More Movies...
        </div>

        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default LoadMoreToast
