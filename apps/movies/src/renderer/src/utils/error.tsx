import { clearError } from '@renderer/features/errors/slice'
import { useAppSelector } from '@renderer/hooks'
import { useEffect, useState } from 'react'

const ToastComponent = (): JSX.Element | false => {
  const [isVisible, setIsVisible] = useState(false)
  const globalError = useAppSelector((state) => state.error)

  useEffect(() => {
    setIsVisible(true)
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 4000)

    return () => {
      clearTimeout(timer)
      clearError()
    }
  }, [globalError])

  const toastClass = `fixed top-0 left-1/2 transform -translate-x-1/2 p-4 m-4 text-sm rounded-lg shadow-red-lg 'bg-red-100 text-red-900 dark:text-red-600' z-50`

  return (
    isVisible && (
      <div className={`${toastClass} transition-opacity duration-500`} role="alert">
        <span className="font-medium">Error!</span> {globalError.message}
      </div>
    )
  )
}

export default ToastComponent
