import ErrorToast from '@renderer/components/error-toast'
import { clearError, selectErrorMessage } from '@renderer/features/errors/slice'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Error = (): JSX.Element | false => {
  const [isVisible, setIsVisible] = useState(false)
  const globalError = useSelector(selectErrorMessage)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 4000)

    return () => {
      clearTimeout(timer)
      clearError()
    }
  }, [])

  return (
    isVisible &&
    !!globalError && <ErrorToast errorMessage={globalError.message} setIsVisible={setIsVisible} />
  )
}

export default Error
