import ErrorToast from '@renderer/components/errors/error-toast'
import { clearError, selectErrorMessage } from '@renderer/features/errors/slice'
import { useAppDispatch } from '@renderer/hooks'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Error = (): JSX.Element | null => {
  const [isVisible, setIsVisible] = useState(false)
  const dispatch = useAppDispatch()
  const globalError = useSelector(selectErrorMessage)

  useEffect(() => {
    if (globalError) {
      setIsVisible(true)
      const timer = setTimeout(() => {
        setIsVisible(false)
        dispatch(clearError())
      }, 4000)

      return () => {
        clearTimeout(timer)
        dispatch(clearError())
      }
    }
    return undefined
  }, [globalError, dispatch])

  return isVisible && globalError ? (
    <ErrorToast errorMessage={globalError} setIsVisible={setIsVisible} />
  ) : null
}

export default Error
