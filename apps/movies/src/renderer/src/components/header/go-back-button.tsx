import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const BackButton: FC = () => {
  const navigate = useNavigate()

  const handleGoBack = (): void => {
    navigate('/')
  }
  return (
    <div className="z-50 absolute top-0 left-0 m-4 mt-0">
      <button
        onClick={handleGoBack}
        className="text-gray-600 dark:text-gray-400 hover:text-black focus:outline-none dark:hover:text-gray-200"
      >
        <svg
          className="w-[90px] h-[90px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="2 2 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M8.293 7.293a1 1 0 011.414 1.414L6.414 12l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  )
}

export default BackButton
