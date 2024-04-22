import { useState, useEffect, FC } from 'react'

type ToastProps = {
  type: 'info' | 'error' | 'success' | 'warning' | 'dark'
  message: string
  open: boolean
  onClose?: () => void
}

export const Toast: FC<ToastProps> = ({ type, message, open, onClose }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (open) {
      setIsVisible(true)
      timer = setTimeout(() => {
        setIsVisible(false)
        onClose?.()
      }, 3000)
    } else {
      setIsVisible(false)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [open, onClose])

  const toastColors = {
    info: 'bg-blue-50 text-blue-800 dark:text-blue-400',
    error: 'bg-red-100 text-red-900 dark:text-red-600',
    success: 'bg-green-50 text-green-800 dark:text-green-400',
    warning: 'bg-yellow-50 text-yellow-800 dark:text-yellow-300',
    dark: 'bg-gray-800 text-gray-300'
  }

  const toastClass = `fixed top-0 left-1/2 transform -translate-x-1/2 p-4 m-4 text-sm rounded-lg shadow-red-lg ${toastColors[type] || 'bg-gray-50 text-gray-800 dark:text-gray-300'} z-50`

  return (
    isVisible && (
      <div className={`${toastClass} transition-opacity duration-500`} role="alert">
        <span className="font-medium">{type.charAt(0).toUpperCase() + type.slice(1)} Alert!</span>{' '}
        {message}
      </div>
    )
  )
}

export default Toast
